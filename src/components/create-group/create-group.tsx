import { useState } from 'react';
import { CreateGroupWrapper } from './create-group.styles';
import { TextInput, createStyles, rem, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import { createGroupApi } from '../../service';

const useStyles = createStyles((theme, { floating }: { floating: boolean }) => ({
  root: {
    position: 'relative',
    width: '70%',
  },

  label: {
    position: 'absolute',
    zIndex: 2,
    top: rem(7),
    left: theme.spacing.sm,
    pointerEvents: 'none',
    color: floating
      ? theme.colorScheme === 'dark'
        ? theme.white
        : theme.black
      : theme.colorScheme === 'dark'
      ? theme.colors.dark[3]
      : theme.colors.gray[5],
    transition: 'transform 150ms ease, color 150ms ease, font-size 150ms ease',
    transform: floating ? `translate(-${theme.spacing.sm}, ${rem(-45)})` : 'none',
    fontSize: floating ? rem(22) : rem(28),
    fontWeight: floating ? 500 : 400,
  },

  required: {
    transition: 'opacity 150ms ease',
    opacity: floating ? 1 : 0,
  },

  input: {
    height: rem(60),
    fontSize: rem(22),
    borderColor: '#8fba8479',
    '&::placeholder': {
      transition: 'color 150ms ease',
      color: !floating ? 'transparent' : undefined,
    },
    '&:focus': {
      borderColor: '#8FBA84',
    },
  },
}));

const buttonStyle = { backgroundColor: '#8FBA84', height: 'auto', width: '30%', marginLeft: '10px', fontSize: '20px' };

const formStyles = {
  width: '100%',
  display: 'flex',
};

export const CreateGroup = () => {
  const form = useForm({
    initialValues: { group: '' },
  });
  const value = form.values;
  const [focused, setFocused] = useState(false);
  const { classes } = useStyles({ floating: value.group.trim().length !== 0 || focused });

  const hanleSubmit = async (e: any) => {
    e.preventDefault();
    await createGroupApi(value.group);
    form.reset();
  };

  return (
    <CreateGroupWrapper>
      <form style={formStyles} onSubmit={hanleSubmit}>
        <TextInput
          label="Enter your group name"
          placeholder="New group name"
          required
          classNames={classes}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...form.getInputProps('group')}
        />
        <Button variant="filled" type="submit" radius="xs" style={buttonStyle}>
          Create
        </Button>
      </form>
    </CreateGroupWrapper>
  );
};
