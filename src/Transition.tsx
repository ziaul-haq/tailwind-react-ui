/**
 * https://gist.github.com/adamwathan/e0a791aa0419098a7ece70028b2e641e
 */
import React, { Children, cloneElement, isValidElement, useContext, useEffect, useRef } from 'react'
import { CSSTransition as ReactCSSTransition } from 'react-transition-group'

interface TransitionContextValue {
  parent: {
    appear?: boolean
    show?: boolean
    isInitialRender?: boolean
  }
}

const TransitionContext = React.createContext<TransitionContextValue>({
  parent: {},
})

function useIsInitialRender() {
  const isInitialRender = useRef(true)
  useEffect(() => {
    isInitialRender.current = false
  }, [])
  return isInitialRender.current
}

interface TransitionProps {
  children?: React.ReactNode
  show?: boolean
  enter?: string
  enterFrom?: string
  enterTo?: string
  leave?: string
  leaveFrom?: string
  leaveTo?: string
  appear?: boolean
}

const CSSTransition = ({
  show,
  enter = '',
  enterFrom = '',
  enterTo = '',
  leave = '',
  leaveFrom = '',
  leaveTo = '',
  appear,
  children,
}: TransitionProps) => {
  const nodeRef = useRef<HTMLElement>(null)

  if (!isValidElement(children)) return null

  const enterClasses = enter.split(' ').filter((s) => s.length)
  const enterFromClasses = enterFrom.split(' ').filter((s) => s.length)
  const enterToClasses = enterTo.split(' ').filter((s) => s.length)
  const leaveClasses = leave.split(' ').filter((s) => s.length)
  const leaveFromClasses = leaveFrom.split(' ').filter((s) => s.length)
  const leaveToClasses = leaveTo.split(' ').filter((s) => s.length)

  function addClasses(classes: string[]) {
    classes.length && nodeRef.current?.classList.add(...classes)
  }

  function removeClasses(classes: string[]) {
    classes.length && nodeRef.current?.classList.remove(...classes)
  }

  return (
    <ReactCSSTransition
      appear={appear}
      in={show}
      nodeRef={nodeRef}
      unmountOnExit
      addEndListener={(done) => {
        nodeRef.current?.addEventListener('transitionend', done, false)
      }}
      onEnter={() => {
        addClasses([...enterClasses, ...enterFromClasses])
      }}
      onEntering={() => {
        removeClasses(enterFromClasses)
        addClasses(enterToClasses)
      }}
      onEntered={() => {
        removeClasses([...enterToClasses, ...enterClasses])
      }}
      onExit={() => {
        addClasses([...leaveClasses, ...leaveFromClasses])
      }}
      onExiting={() => {
        removeClasses(leaveFromClasses)
        addClasses(leaveToClasses)
      }}
      onExited={() => {
        removeClasses([...leaveToClasses, ...leaveClasses])
      }}
    >
      {cloneElement(Children.only(children), {
        ref: nodeRef,
      })}
    </ReactCSSTransition>
  )
}

const Transition = ({ show, appear, ...rest }: TransitionProps) => {
  const { parent } = useContext(TransitionContext)
  const isInitialRender = useIsInitialRender()
  const isChild = show === undefined

  if (isChild) {
    return (
      <CSSTransition
        appear={parent.appear || !parent.isInitialRender}
        show={parent.show}
        {...rest}
      />
    )
  } else
    return (
      <TransitionContext.Provider
        value={{
          parent: {
            show,
            isInitialRender,
            appear,
          },
        }}
      >
        <CSSTransition appear={appear} show={show} {...rest} />
      </TransitionContext.Provider>
    )
}

export default Transition
