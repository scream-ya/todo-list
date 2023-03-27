import { Typography as Title, IconButton, Tooltip } from '@mui/material';
import styled from '@emotion/styled';
import { Add } from '@mui/icons-material';
import { observer } from 'mobx-react';
import Container from 'components/Container';
import ListItem from 'components/ListItem';
import { useStore } from 'store/store';

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  marginBottom: '30px'
`;

const Main = () => {
  const store = useStore();

  return (
    <Container>
      <Header>
        <Title variant="h4" style={{ marginRight: '20px' }}>ToDo list</Title>
        <Tooltip title="Add" placement="right">
          <IconButton size="large" onClick={() => store.addTodo()}><Add fontSize="large" /></IconButton>
        </Tooltip>
      </Header>
      {store.data.map((item) => (
        <ListItem key={item.id} item={item} deleteTodo={() => store.deleteTodo(item.id)} />
      ))}
    </Container>
  );
};

export default observer(Main);
