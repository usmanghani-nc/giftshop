import { useState, useEffect } from 'react';
import Section from 'components/section';
import Input from 'components/input';
import Button from 'components/button';
import Form, { FormGroup } from 'components/form';
import Table from 'components/table';
import dynamic from 'next/dynamic';
import API from 'endpoint';
import Image from 'components/image';

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

  const [edit, setEdit] = useState(false);

  const f = async () => {
    try {
      const { data } = await API.get('/gift');

      setData({
        lading: false,
        items: data.payload,
      });
    } catch (e) {
      setData({
        ...state,
        lading: false,
      });
      // console.error(e.message);
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
      const { data } = await API.post('/gift', formData, {
        headers: { 'content-type': 'multipart/form-data' },
      });

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
      // console.error(e.message);
    }
  };

  const handleInput = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleDelet = async (id) => {
    try {
      const { data } = await API.delete('/gift', {
        data: {
          id,
        },
      });

      if (data.payload.deleted) {
        f();
      }
    } catch (err) {
      // console.error(err.message);
    }
  };

  const handleEdit = async (id) => {
    try {
      const { title, description, price, img, category } = state;

      // form data will not show in log you have to loop em to see values
      // just send req it will be update

      const formData = new FormData();
      formData.append('id', id);
      formData.append('title', title);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('img', img);
      formData.append('category', JSON.stringify(category));

      const { data } = await API.put('/gift', formData, {
        headers: { 'content-type': 'multipart/form-data' },
      });

      if (data.payload.save) {
        f();
      }

      setEdit(false);

      setState({
        category: null,
        title: '',
        description: '',
        price: 0,
        img: '',
        lading: false,
      });
    } catch (err) {
      // console.error(err.message);
      setEdit(false);
      setState({
        category: null,
        title: '',
        description: '',
        price: 0,
        img: '',
        lading: false,
      });
    }
  };

  const setEditValue = (id) => {
    setEdit(id);

    const foundItem = data?.items.find((ff) => ff._id === id);
    setState({
      ...state,
      ...foundItem,
    });
  };

  return (
    <Section fullPage>
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
        columns={[
          {
            Header: 'Title',
            accessor: 'title',
            Cell: (props) => {
              return (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div
                    style={{
                      width: '5rem',
                      height: '5rem',
                      marginRight: '2rem',
                      borderRadius: '100%',
                    }}
                  >
                    <Image src={props.row.original.img} />
                  </div>

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
                <div style={{ display: 'flex' }}>
                  <div
                    style={{
                      cursor: 'pointer',
                      marginRight: '10px',
                      color: 'red',
                    }}
                    onClick={() => handleDelet(props.cell.value)}
                  >
                    Delete
                  </div>
                  /
                  {edit === props.cell.value ? (
                    <div
                      style={{
                        cursor: 'pointer',
                        marginLeft: '10px',
                        color: 'green',
                      }}
                      onClick={() => handleEdit(props.cell.value)}
                    >
                      Save
                    </div>
                  ) : (
                    <div
                      style={{
                        cursor: 'pointer',
                        marginLeft: '10px',
                        color: 'green',
                      }}
                      onClick={() => setEditValue(props.cell.value)}
                    >
                      Edit
                    </div>
                  )}
                </div>
              );
            },
          },
        ]}
        body={data.items?.map((el) => ({
          ...el,
          category: el.category.value,
        }))}
      />
    </Section>
  );
}
