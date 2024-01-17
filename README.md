## 리액트 시작하기
const [show,setShow]=useState(false);
useState : 함수형 컴포넌트에서도 상태(state)를 관리할수있게 해주는 HOOK
const [변수명,상태를 업테이트할 함수명] = useState(초기값)
        show, setShow

useEffect : 컴포넌트가 렌더링 될때마다  어떠한 작업을 수행하도록 해야한다면 , 그것을 설정하는 Hook으로 사용

import React, { useState } from 'react'

<!-- // const Footer = () => {
// 	const [count, setCount] = useState(0)
// 	return(
// 		<div>
// 			<p>you clicked {count } times </p>
// 			<button onClick={()=>(setCount(count+1))}>click me +</button>
// 			<button onClick={()=>(setCount(count-1))}>click me -</button>
// 		</div>
// 	)
// };

// export default Footer -->