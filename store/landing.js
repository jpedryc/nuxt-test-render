const UPDATE_CONTENT = 'UPDATE_CONTENT';

export const state = () => ({
  content: [],
});

export const getters = {
  content: state => state.content,
};

export const actions = {
  async updateContent({ commit }) {
    const content = require('./landingContent.json');
    commit(UPDATE_CONTENT, content)
  }
};

export const mutations = {
  [UPDATE_CONTENT](state, data) {
    state.content = data;
  }
};
