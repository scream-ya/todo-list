import React from 'react';
import { observer } from 'mobx-react';
import styled from '@emotion/styled';
import { Item } from 'store/store';
import {
  Checkbox,
  Input,
  IconButton,
} from '@mui/material';
import {
  CheckCircle,
  CircleOutlined,
  PriorityHigh,
  DeleteForever,
} from '@mui/icons-material';

const ListItemWrapper = styled.div<{isDone?: boolean}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  background: ${({ isDone }) => (isDone ? '#f0fff1' : '#ffffff')};
  padding-left: 14px;

  &:hover {
    background: #f6f6f6;
  }
`;

const TextField = styled(Input)`
  cursor: pointer;
  padding: 14px 0;

  .MuiInput-input {
    cursor: pointer;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-shrink: 0;
`;

const PriorityHighIcon = styled(PriorityHigh)`
  margin-left: -14px;
`;

interface ListItemProps {
  item: Item
  deleteTodo: () => void
}

const ListItem: React.FC<ListItemProps> = ({ item, deleteTodo }) => {
  return (
    <ListItemWrapper isDone={item.isDone}>
      {item.isPriorityHigh && <PriorityHighIcon color="error" fontSize="large" />}
      <TextField
        fullWidth
        multiline
        disableUnderline
        value={item.text}
        onChange={(e) => item.editTodo({ text: e.target.value })}
        autoFocus={item.isNew}
      />
      <ButtonGroup>
        <Checkbox
          icon={<CircleOutlined />}
          checkedIcon={<CheckCircle />}
          color="success"
          checked={item.isDone}
          onChange={(e) => item.editTodo({ isDone: e.target.checked })}
        />
        <Checkbox
          icon={<PriorityHigh />}
          checkedIcon={<PriorityHigh />}
          color="error"
          checked={item.isPriorityHigh}
          onChange={(e) => item.editTodo({ isPriorityHigh: e.target.checked })}
        />
        <IconButton onClick={deleteTodo}><DeleteForever /></IconButton>
      </ButtonGroup>
    </ListItemWrapper>
  );
};

export default observer(ListItem);
