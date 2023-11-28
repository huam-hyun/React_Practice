import React, { ReactElement, useState } from "react"

const UseState = (): ReactElement => {
  const [render, setRerender] = useState<number>(0)
  const [commonState, setCommonState] = useState<string>('commonState')
  const [lazyState, setLazyState] = useState<string>(() => {
    console.log('lazyState의 함수는 한 번만 실행됩니다.')
    return 'lazyState'
  })

  console.log('컴포넌트가 재렌더링 되면 함수가 실행됩니다.')

  const handleRerender = () => {
    setRerender(render + 1)
  }

  return (
    <>
      <header>useState 페이지</header>
      <br />
      <section>
        <div>
          일반적인 useState 사용
        </div>
        <div>
          {commonState}
        </div>
      </section>
      <br />
      <section>
        <div>
          게으른 초기화를 사용한 useState 사용<br />
          useState에 함수를 사용하면 초기값으로 설정해줄 수 있다.<br />
          useState 초기 값에 비용이 들어가는 경우 컴포넌트가 다시(리렌더링) 생겨나면 매번 다시 계산이 되지만,<br />
          useState에 함수를 사용할 경우 첫 로딩 이후 다시 계산되지 않는다.<br />
        </div>
        <div>
          {lazyState}
        </div>
      </section>
      <br />
      <section>
        <button onClick={handleRerender}>리렌더링 버튼</button>
      </section>
    </>
  )
}

export default UseState