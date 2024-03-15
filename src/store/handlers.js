export const handlePending = state => {
  return {
    ...state,
    contacts: {
      ...state.contacts,
      isLoading: true,
      error: '',
    },
  };
};
export const handleRejected = (state, { error }) => {
  return {
    ...state,
    contacts: {
      ...state.contacts,
      isLoading: false,
      error: error.message,
    },
  };
};
export const handleAllFullfieldContacts = (state, { payload }) => {
  return {
    ...state,
    contacts: {
      ...state.contacts,
      items: payload,
      isLoading: false,
    },
  };
};

export const handleCreateNewContact = (state, { payload }) => {
  return {
    ...state,
    contacts: {
      ...state.contacts,
      items: [...state.contacts.items, payload],
      isLoading: false,
    },
  };
};

export const handleDeletContactById = (state, { payload }) => {
  return {
    ...state,
    contacts: {
      ...state.contacts,
      items: state.contacts.items.filter(item => item.id !== payload.id),
      isLoading: false,
    },
  };
};
