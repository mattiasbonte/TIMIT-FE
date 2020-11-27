import { createStore } from 'vuex';

export default createStore({
  state: {
    user: {
      name: 'Mattias Bonte',
      email: 'accounts@mattiasbonte.dev',
      token: 'lflmqsjfljfmqjfjsqlfjlaofozfmlsqfjlémfqsjlmf',
    },
    projects: [
      {
        id: 'lfjla21jflmq902s',
        title: 'Timit',
        features: [
          {
            id: 1,
            title:
              'Feature 1 wooofsjlfm lsqjflmsqjglds qgjlqksdjgdsql mgjdlsmgjsq mljgqs',
            segments: [
              {
                id: 1,
                day: 'FRI',
                date: '02-10-2020',
                start: '10:30',
                stop: '12:00',
              },
              {
                id: 2,
                start: '03-03-2020t09:30',
                stop: '03-03-2020t14:00',
              },
              {
                id: 3,
                start: '05-03-2020t14:30',
                stop: '05-03-2020t15:00',
              },
            ],
          },
          {
            id: 2,
            title: 'Feature 2',
            segments: [
              {
                id: 1,
                start: '06-03-2020t10:30',
                stop: '06-03-2020t18:30',
              },
            ],
          },
        ],
      },
      {
        id: 'lfjla41jopmq902s',
        title: 'Wind Down',
        features: [
          {
            id: 1,
            title: 'Create API login',
            segments: [
              {
                id: 1,
                start: '02-03-2020t10:30',
                stop: '02-03-2020t12:00',
              },
              {
                id: 2,
                start: '03-03-2020t09:30',
                stop: '03-03-2020t14:00',
              },
              {
                id: 3,
                start: '05-03-2020t14:30',
                stop: '05-03-2020t15:00',
              },
            ],
          },
          {
            id: 2,
            title: 'Testing API calls',
            segments: [
              {
                id: 1,
                start: '06-03-2020t10:30',
                stop: '06-03-2020t18:30',
              },
            ],
          },
          {
            id: 3,
            title: 'Styling Front End',
            segments: [
              {
                id: 1,
                start: '07-03-2020t14:30',
                stop: '07-03-2020t18:30',
              },
            ],
          },
        ],
      },
    ],
  },
  getters: {
    getProjects(state) {
      return state.projects;
    },
  },
  mutations: {
    addNewFeature(state, payload) {
      // Search for project based on payload.id
      const project = state.projects.filter((x) => {
        x.id === payload.id;
      });
      console.log(project);
      // Add new payload.feature object to projects.features array
      // project.features.unshift(payload.feature);
    },
  },
  actions: {},
  modules: {},
});
