import React from 'react'
import { mount } from 'enzyme'
import Avatar from '../Avatar'

describe('Avatar', () => {
  it('should render without crashing', () => {
    mount(<Avatar src="test" />)
  })

  it('should render with base styles', () => {
    const expected = 'relative rounded-full inline-block'
    const wrapper = mount(<Avatar src="test" />)

    expect(wrapper.find(Avatar).getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with large styles', () => {
    const expected = 'w-10 h-10'
    const wrapper = mount(<Avatar src="test" size="large" />)

    expect(wrapper.find(Avatar).getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with regular styles using prop', () => {
    const expected = 'w-8 h-8'
    const wrapper = mount(<Avatar src="test" size="regular" />)

    expect(wrapper.find(Avatar).getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with regular styles by default', () => {
    const expected = 'w-8 h-8'
    const wrapper = mount(<Avatar src="test" />)

    expect(wrapper.find(Avatar).getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with small styles', () => {
    const expected = 'w-6 h-6'
    const wrapper = mount(<Avatar src="test" size="small" />)

    expect(wrapper.find(Avatar).getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should contain an image with alt text', () => {
    const expected = 'Lorem'
    const wrapper = mount(<Avatar src="test" alt="Lorem" />)

    expect(wrapper.find('img').getDOMNode().getAttribute('alt')).toContain(expected)
  })

  it('should contain an image with the correct src', () => {
    const expected = 'test'
    const wrapper = mount(<Avatar src="test" alt="Lorem" />)

    expect(wrapper.find('img').getDOMNode().getAttribute('src')).toContain(expected)
  })
})

describe('Avatar Status',()=>{
  it('should render hasStatus attribute', () => {
    const expected = 'absolute bottom-0 right-0 rounded-md'
    const wrapper = mount(<Avatar src="test" alt="Lorem" hasStatus />)

    expect(wrapper.find('[data-testid="statusNode"]').getDOMNode().className).toContain(expected);
  })
  it('should render hasStatus attribute active', () => {
    const expected = 'bg-green-500'
    const wrapper = mount(<Avatar src="test" alt="Lorem" hasStatus status={'active'} />)

    expect(wrapper.find('[data-testid="statusNode"]').getDOMNode().className).toContain(expected);
  })
  it('should render hasStatus attribute away', () => {
    const expected = 'bg-yellow-500'
    const wrapper = mount(<Avatar src="test" alt="Lorem" hasStatus status={'away'} />)

    expect(wrapper.find('[data-testid="statusNode"]').getDOMNode().className).toContain(expected);
  })
  it('should render hasStatus attribute busy', () => {
    const expected = 'bg-red-500'
    const wrapper = mount(<Avatar src="test" alt="Lorem" hasStatus status={'busy'} />)

    expect(wrapper.find('[data-testid="statusNode"]').getDOMNode().className).toContain(expected);
  })
  it('should render hasStatus attribute offline', () => {
    const expected = 'bg-gray-500'
    const wrapper = mount(<Avatar src="test" alt="Lorem" hasStatus status={'offline'} />)

    expect(wrapper.find('[data-testid="statusNode"]').getDOMNode().className).toContain(expected);
  })
  it('should render hasStatus size small', () => {
    const expected = 'w-1.5 h-1.5'
    const wrapper = mount(<Avatar src="test" alt="Lorem" hasStatus size={'small'} />)

    expect(wrapper.find('[data-testid="statusNode"]').getDOMNode().className).toContain(expected);
  })
  it('should render hasStatus size regular', () => {
    const expected = 'w-2 h-2'
    const wrapper = mount(<Avatar src="test" alt="Lorem" hasStatus  size={'regular'}/>)

    expect(wrapper.find('[data-testid="statusNode"]').getDOMNode().className).toContain(expected);
  })
  it('should render hasStatus size large', () => {
    const expected = 'w-3 h-3'
    const wrapper = mount(<Avatar src="test" alt="Lorem" hasStatus size={'large'} />)

    expect(wrapper.find('[data-testid="statusNode"]').getDOMNode().className).toContain(expected);
  })
})
describe('Avatar Initial test',()=>{
  it('should render when avatar is undefined', () => {
    const expected = 'flex items-center justify-center w-full h-full rounded-full bg-gray-200'
    const wrapper = mount(<Avatar alt="Lorem" />)

    expect(wrapper.find('[data-testid="initialNode"]').getDOMNode().className).toContain(expected);
  })
  it('should render when avatar is undefined and font size adjusted with size small', () => {
    const expected = 'text-[0.625rem]'
    const wrapper = mount(<Avatar alt="Lorem" name='John Doe' size='small' />)

    expect(wrapper.find('[data-testid="initialNode"]').getDOMNode().className).toContain(expected);
  })
  it('should render when avatar is undefined and font size adjusted with size regular', () => {
    const expected = 'text-sm'
    const wrapper = mount(<Avatar alt="Lorem" name='John Doe' size='regular' />)

    expect(wrapper.find('[data-testid="initialNode"]').getDOMNode().className).toContain(expected);
  })
  it('should render when avatar is undefined and font size adjusted with size large', () => {
    const expected = 'text-md'
    const wrapper = mount(<Avatar alt="Lorem" name='John Doe' size='large' />)

    expect(wrapper.find('[data-testid="initialNode"]').getDOMNode().className).toContain(expected);
  })
  it('should render when we pass initialContainerClassName', () => {
    const expected = 'bg-red-500 text-white'
    const wrapper = mount(<Avatar alt="Lorem" name='John Doe' size='large' initialContainerClassName={expected} />)

    expect(wrapper.find('[data-testid="initialNode"]').getDOMNode().className).toContain(expected);
  })
})
