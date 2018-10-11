import { createSelector } from "reselect";

// DON'T REMOVE
// export const makeGetEventsForList = () => createSelector(
//   (state, props={}) => props.branch_id,
//   (state) => state.eventsList,
//   (branch_id, events) => {
//     if(branch_id) {
//       const filtered = events.filter(e => e.branch_id === branch_id);
//       return filtered.map(event => ({
//         label: event.name,
//         value: event._id,
//       }));
//     }
//
//     return events.map(event => ({
//       label: event.name,
//       value: event._id,
//     }));
//
//   }
// );

// export const getEventsForList = createSelector(
//   (state) => state.eventsList,
//   (events) => events.map(event => ({
//     label: event.name,
//     value: event._id,
//   }))
// );

const makeSelectGroupedEventsList = createSelector(
  (state) => state.branchesList,
  (state) => state.events.getIn(["eventsList"]).toJS(),
  (branches, events) => {
    const result = [];
    branches.forEach(branch => {
      const tempEvents = events.filter(event => event.branch_id === branch._id);
      if(tempEvents) {
        result.push({
          groupLabel: branch.name,
          groupValue: tempEvents.map(p => ({
            label: p.name,
            value: p._id,
          })),
        });
      }
    });

    return result;
  }
);

const makeSelectEventsList = createSelector(
  state => state.events,
  events => events.getIn(["eventsList"]).toJS(),
);

export {
  makeSelectGroupedEventsList,
  makeSelectEventsList,
};
