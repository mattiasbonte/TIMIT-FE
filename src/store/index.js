import { createStore } from 'vuex';
import dayjs from 'dayjs';

export default createStore({
  state: {
    user: {
      first_name: 'Mattias',
      last_name: 'Bonte',
      email: 'accounts@mattiasbonte.dev',
      token: 'lflmqsjfljfmqjfjsqlfjlaofozfmlsqfjlémfqsjlmf',
    },
    projects: [
      {
        id: 'FR2_mAljUdjmcuSquriql',
        description: 'Timit',
        project_start_date: '2020-11-20',
        disable_start_form: false,
        hourly_rate: 25,
        currency: 'EUR',
        features: [
          {
            id: '3ml31lkldqj2',
            description: 'Developing header',
            segments: [
              {
                id: '31998lqfjq23lfjslqfj',
                start_date: '2020-11-24',
                start_time: '08:30',
                stop_date: '2020-11-24',
                stop_time: '11:00',
              },
            ],
          },
          {
            id: 'mlqsdf310jml',
            description: 'Set up routing and basic Vuex datastore',
            segments: [
              {
                id: '3123fqsqld2dfjslqfj',
                start_date: '2020-11-20',
                start_time: '13:30',
                stop_date: '2020-11-20',
                stop_time: '15:30',
              },
              {
                id: '3123fqsqld2dfjslqfj',
                start_date: '2020-11-20',
                start_time: '16:00',
                stop_date: '2020-11-20',
                stop_time: '18:00',
              },
            ],
          },
          {
            id: '3mla&3lkamj2',
            description: 'Init project & basic structure',
            segments: [
              {
                id: '3123fafqslza2lfjslqfj',
                start_date: '2020-11-20',
                start_time: '08:00',
                stop_date: '2020-11-20',
                stop_time: '10:00',
              },
              {
                id: '312flq2qslza2lfjslqfj',
                start_date: '2020-11-20',
                start_time: '10:30',
                stop_date: '2020-11-20',
                stop_time: '12:30',
              },
            ],
          },
        ],
      },
    ],
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getProjects(state) {
      return state.projects;
    },
    getProject: (state) => (id) => {
      return state.projects.find((project) => project.id === id);
    },
    getFeatures: (state) => (id) => {
      return state.projects.find((project) => project.id === id).features;
    },
    getProjectInProgress: (state) => (payload) => {
      // If we can find an empty stop_time timestamp in our segments, return true
      const project = state.projects.find(
        (project) => project.id === payload.project_id
      );

      let projectInProgress = 0;

      project.features.forEach((feature) => {
        // When stop_time === '' is truthy, we return true, otherwise false
        const featureInProgress = feature.segments.some((segment) => {
          return segment.stop_time === '';
        });
        featureInProgress ? projectInProgress++ : '';
      });

      return projectInProgress > 0 ? true : false;
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
    getProjectTotalTime: (state) => (payload) => {
      const project = state.projects.find(
        (project) => project.id === payload.project_id
      );
      let total_time = 0;
      project.features.forEach((feature) => {
        feature.segments.forEach((segment) => {
          const start = dayjs(`${segment.start_date} ${segment.start_time}`);
          const stop = dayjs(`${segment.stop_date} ${segment.stop_time}`);
          total_time += (stop - start) / (1000 * 60 * 60);
        });
      });
      return total_time;
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
    setProjects(state, payload) {
      state.projects = payload.fetched_projects;
    },
    addNewProject(state, payload) {
      state.projects = [payload.project, ...state.projects];
    },
    addNewFeature(state, payload) {
      // Adds a new feature object (payload.feature) to an existing project with id === payload.id
      state.projects = state.projects.map((project) => {
        if (project.id === payload.project_id) {
          project.features.unshift(payload.feature);
        }
        return project;
      });
    },
    addNewSegment(state, payload) {
      state.projects = state.projects.map((project) => {
        if (project.id === payload.project_id) {
          project.features.map((feature) => {
            if (feature.id === payload.feature_id) {
              feature.segments.push(payload.segment);
            }
            return feature;
          });
        }
        return project;
      });
    },
    stopNewSegment(state, payload) {
      state.projects = state.projects.map((project) => {
        if (project.id === payload.project_id) {
          project.features.map((feature) => {
            if (feature.id === payload.feature_id) {
              feature.segments.map((segment) => {
                if (segment.id === payload.segment_id) {
                  segment.start_date = payload.start_date;
                  segment.start_time = payload.start_time;
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
    editSegment(state, payload) {
      state.projects = state.projects.map((project) => {
        if (project.id === payload.project_id) {
          project.features.map((feature) => {
            if (feature.id === payload.feature_id) {
              feature.segments.map((segment) => {
                if (segment.id === payload.segment_id) {
                  segment.stop_time = '';
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
    deleteSegment(state, payload) {
      state.projects = state.projects.map((project) => {
        if (project.id === payload.project_id) {
          project.features.map((feature) => {
            if (feature.id === payload.feature_id) {
              const index = feature.segments.findIndex(
                (segment) => segment.id === payload.segment_id
              );
              feature.segments.splice(index, 1);
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
