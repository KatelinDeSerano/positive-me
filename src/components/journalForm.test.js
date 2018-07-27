// import React from "react";
// import JournalForm from "./journalForm.js";
// import { shallow, mount } from "enzyme";
// import store from '../store';
// import { Provider } from 'react-redux';

// describe('<JournalForm />', () => {
//     it('Renders without crashing', () => {
//       shallow(
//         <Provider store={store} >  
//         <JournalForm />
//         </Provider>
//         );
//     });
  
//     it('Should fire the handleSubmit callback when the form is submitted', () => {
//       const dispatch = jest.fn();
//       const wrapper = mount(
//         <Provider store={store} >
//         <JournalForm handleSubmit={dispatch} />
//         </Provider>
//         );
//     //   const date = 10;
//     //   const emojiValue1 = 1;
//     //   const emojiValue2 = 4;
//       const username = "KDezzie";
//       const text = "Rubber Duck";
//       wrapper.find('input[name="negativeThought"]').instance().value = text;
//       wrapper.simulate('submit');
//       expect(dispatch).toHaveBeenCalledWith(value.toString());
//     });
  
//     it('Should reset the input when the form is submitted', () => {
//       const wrapper = mount(
//         <Provider store={store} >
//         <JournalForm />
//         </Provider>
//       );
//       const input = wrapper.find('input[type="text"]');
//       input.instance().value = "Rubber Duck";
//       wrapper.simulate('submit');
//       expect(input.instance().value).toEqual('');
//     });
//   });;