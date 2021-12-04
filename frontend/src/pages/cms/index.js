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
      setData({
        ...state,
        lading: false,
      });
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

    const { title, description, price, img, category } = state;

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('img', img);
    formData.append('category', JSON.stringify(category));

    try {
      const { data } = await axios.post(
        'http://localhost:8080/gift',
        formData,
        {
          headers: { 'content-type': 'multipart/form-data' },
        }
      );

      if (data.payload.save) {
        f();
      }

      setState({
        ...state,
        lading: false,
      });
    } catch (e) {
      setState({
        ...state,
        lading: false,
      });
      console.log(e.message, '<=/gift');
    }
  };

  const handleInput = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Section fullPage>
      <h1 style={{ marginBottom: '22px' }}>CMS</h1>
      <div>
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
            <Input
              action={(e) => setState({ ...state, img: e.target.files[0] })}
              placeholder="Product Image"
              type="file"
              border
              name="img"
            />
            {state.img && state.img.name}
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
            {
              Header: 'Title',
              accessor: 'title',
              Cell: (props) => {
                return (
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src={'http://localhost:8080/' + props.row.original.img}
                      alt={props.row.original.img}
                      style={{
                        width: '4rem',
                        height: '4rem',
                        marginRight: '2rem',
                        borderRadius: '50%',
                      }}
                    />
                    <span>{props.cell.value}</span>
                  </div>
                );
              },
            },
            { Header: 'Description', accessor: 'description' },
            { Header: 'Price', accessor: 'price' },
            { Header: 'Category', accessor: 'category' },

            {
              Header: 'Action',
              accessor: '_id',
              Cell: (props) => {
                return (
                  <div
                    onClick={() => console.log(props.cell.value, 'delete row')}
                  >
                    Delete
                  </div>
                );
              },
            },
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
