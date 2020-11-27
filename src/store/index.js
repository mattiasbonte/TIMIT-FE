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
        description: 'Timit',
        features: [
          {
            id: 1,
            description: 'Feature 1',
            segments: [
              {
                id: 1,
                start_date: '2020-10-02',
                start_time: '10:30',
                stop_date: '2020-10-02',
                stop_time: '12:00',
              },
            ],
          },
        ],
      },
      {
        id: 'lfjla41jopmq902s',
        description: 'Wind Down',
        features: [
          {
            id: 1,
            description: 'Create API login',
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
            description: 'Testing API calls',
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
            description: 'Styling Front End',
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
    getFeatures: (state) => (id) => {
      return state.projects.find((project) => project.id === id).features;
    },
  },
  mutations: {
    addNewFeature(state, payload) {
      // Adds a new feature object (payload.feature) to an existing project with id === payload.id
      state.projects = state.projects.map((project) => {
        if (project.id === payload.id) {
          project.features.unshift(payload.feature);
        }
        return project;
      });
    },
    stopSegment(state, payload) {
      state.projects = state.projects.map((project) => {
        if (project.id === payload.project_id) {
          project.features.map((feature) => {
            if (feature.id === payload.feature_id) {
              feature.segments.map((segment) => {
                if (segment.id === payload.segment_id) {
                  segment.stop_date = payload.stop_date;
                  segment.stop_time = payload.stop_time;
                }
                return segment;
              });
            }
            return feature;
          });
        }
        return project;
      });
    },
  },
  actions: {},
  modules: {},
});
