import { mount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'
import Timeline from '@/components/Timeline.vue'


// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       props: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })

describe('Timeline.vue', () => {
  it('为了单元测试而测试~~', () => {
    const wrapper = mount(Timeline);
    // console.log(wrapper.html());
    // expect(1).toBe(1);  // true
    // const periods = wrapper.findAll('div');
    // console.log(periods);
    // expect(periods.length).toBe(1);
    expect(wrapper.findAll('div')).toHaveLength(1);
  })
})
