import { createStore } from 'vuex';
import dayjs from 'dayjs';

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
        disable_start_form: false,
        features: [
          {
            id: '3mlj2',
            description: 'Feature 1',
            segments: [
              {
                id: '3123lfjslqfj',
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
        disable_start_form: false,
        features: [
          {
            id: '1',
            description: 'Create API login',
            segments: [
              {
                id: '1',
                start: '02-03-2020t10:30',
                stop: '02-03-2020t12:00',
              },
              {
                id: '2',
                start: '03-03-2020t09:30',
                stop: '03-03-2020t14:00',
              },
              {
                id: '3',
                start: '05-03-2020t14:30',
                stop: '05-03-2020t15:00',
              },
            ],
          },
          {
            id: '2',
            description: 'Testing API calls',
            segments: [
              {
                id: '1',
                start: '06-03-2020t10:30',
                stop: '06-03-2020t18:30',
              },
            ],
          },
          {
            id: '3',
            description: 'Styling Front End',
            segments: [
              {
                id: '1',
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
    getProject: (state) => (id) => {
      return state.projects.find((project) => project.id === id);
    },
    getFeatures: (state) => (id) => {
      return state.projects.find((project) => project.id === id).features;
    },
    getFeatureInProgress: (state) => (payload) => {
      // If we can find an empty stop_time timestamp in our segments, return true
      const project = state.projects.find(
        (project) => project.id === payload.project_id
      );
      const feature = project.features.find(
        (feature) => feature.id === payload.feature_id
      );

      // When stop_time === '' is truthy, we return true, otherwise false
      const inProgress = feature.segments.some((segment) => {
        return segment.stop_time === '';
      });
      return inProgress;
    },
    getSegment: (state) => (payload) => {
      const project = state.projects.find(
        (project) => project.id === payload.project_id
      );
      const feature = project.features.find(
        (feature) => feature.id === payload.feature_id
      );
      const segment = feature.segments.find(
        (segment) => segment.id === payload.segment_id
      );
      return segment;
    },
    getFeatureTotalTime: (state) => (payload) => {
      const project = state.projects.find(
        (project) => project.id === payload.project_id
      );
      const feature = project.features.find(
        (feature) => feature.id === payload.feature_id
      );

      let total_time = 0;
      feature.segments.forEach((segment) => {
        const start = dayjs(`${segment.start_date} ${segment.start_time}`);
        const stop = dayjs(`${segment.stop_date} ${segment.stop_time}`);
        total_time += (stop - start) / (1000 * 60 * 60);
      });
      return total_time;
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
    toggleStartForm(state, payload) {
      state.projects = state.projects.map((project) => {
        if (project.id === payload.id) {
          project.disable_start_form = payload.disable;
        }
        return project;
      });
    },
  },
  actions: {},
  modules: {},
});
