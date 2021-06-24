import React from 'react'

const Transition = ({ children }: { children: JSX.Element }) => children

const CSSTransition = (props: { in: boolean; children: JSX.Element }) =>
  props.in ? <Transition>{props.children}</Transition> : null

export { Transition, CSSTransition }
