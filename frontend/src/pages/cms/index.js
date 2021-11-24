import { useState, useEffect } from 'react';
import Section from 'components/section';
import Input from 'components/input';
import Button from 'components/button';
import Form, { FormGroup } from 'components/form';
import Table from 'components/table';
import dynamic from 'next/dynamic';
import axios from 'axios';

const Select = dynamic(() => import('components/select'), { ssr: false });

export default function CMS({}) {
  const [state, setState] = useState({
    category: null,
    title: '',
    description: '',
    price: 0,
    img: '',
    lading: false,
  });

  const [data, setData] = useState({
    lading: true,
    items: [],
  });
  const f = async () => {
    try {
      const { data } = await axios.get('http://localhost:8080/gift');

      setData({
        lading: false,
        items: data.payload,
      });
    } catch (e) {
      console.log(e.message, '<=/gift');
    }
  };
  useEffect(() => {
    f();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setState({
      ...state,
      lading: true,
    });

    try {
      const { data } = await axios.post('http://localhost:8080/gift', {
        ...state,
      });

      if (data.payload.save) {
        f();
      }

      setState({
        ...state,
        lading: false,
      });
    } catch (e) {
      console.log(e.message, '<=/gift');
    }
  };

  const handleInput = (event) => {
    console.log(event.target.name, event.target.value);
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Section fullPage>
      <div>
        <h1 style={{ marginBottom: '22px' }}>CMS</h1>

        <Form submit={handleSubmit} block>
          <FormGroup>
            <Input
              name="title"
              label="Title"
              placeholder="Title"
              border
              action={handleInput}
              value={state.title}
            />
          </FormGroup>
          <FormGroup>
            <Input
              name="description"
              label="Description"
              placeholder="Description"
              border
              action={handleInput}
              value={state.description}
            />
          </FormGroup>
          <FormGroup>
            <Input
              name="price"
              label="Price"
              placeholder="Price"
              type="number"
              border
              action={handleInput}
              value={state.price}
            />
          </FormGroup>
          <FormGroup>
            {/* <Input
              label="Image"
              placeholder="Product Image"
              type="file"
              border
            /> */}
            <Input
              name="img"
              label="Image"
              placeholder="Product Image"
              border
              action={handleInput}
              value={state.img}
            />
          </FormGroup>

          <FormGroup>
            Category
            <Select
              action={(category) => setState({ ...state, category })}
              value={state.category}
              options={[
                { value: 'anniversary', label: 'Anniversary' },
                { value: 'birhtday', label: 'Birhtday' },
                { value: 'fathers', label: 'Fathers day' },
                { value: 'mothers', label: 'Mothers day' },
              ]}
            />
          </FormGroup>

          <Button disable={state.lading} loading={state.lading} block>
            Adde Gift
          </Button>
        </Form>

        <Table
          header={[
            { Header: 'Title', accessor: 'title' },
            { Header: 'Description', accessor: 'description' },
            { Header: 'Price', accessor: 'price' },
            { Header: 'Image', accessor: 'img' },
            { Header: 'Category', accessor: 'category' },
          ]}
          body={data.items.map((el) => ({
            ...el,
            category: el.category.value,
          }))}
        />
      </div>
    </Section>
  );
}
