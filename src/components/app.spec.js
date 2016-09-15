import App from './app'
import { shallow } from 'enzyme'

describe('App', () => {
  it('should have one h1 child element', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('h1')).to.have.length(1)
  })
})
