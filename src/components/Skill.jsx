import React from 'react'
const skillText = [
  {
    title:"우리의 목표는 100% 취업이다.",
    desc:"포폴완성해야댐 포폴은 본인작품을 보기 좋게 디자인하여 사람이 편하게 본인의 실력을 볼수 있도록 하는것이 가장 중요합니다. 개성이 강한것도 좋지만 보는 사람들이 편한 작품이 지금은 중요한듯합니다."
  },
  {
    title:"나의 스펙 쌓기",
    desc:"제일 먼저 취업을 먼저 하자.저녁시간을 공부하는데 할애하자정보처리 기사를 취득하자그러려면 저녁에 독할을 하든 재직자 과정을 등록하든 여러분이 열심히 하셔야 10년 후엔 내가 원하는 페이를 받으면서 성장하고 있는 본인을 보실수가 있을겁니다"
  },
  {
    title:"꿈을 키워가자",
    desc:"현실적인 꿈을 가지고 그것을 이루기 위해서 노력을 합시다.올해 안에 여친을 만들자 라든가 내년엔 적금부어서 스페인을 간다던가 한느 현실가능한 꿈을 만들어서 그것을 위해 나의 열정과 노력을 다해봅시다."
  },
 
]
const Skill = () => {
  return (
    <section id='skill'>
      <div className="skill_inner">
        <h2 className='skill_title'>
          challenge <em>나의 도전</em>
        </h2>
        <div className="skill_desc">
        {skillText.map((skill,key)=>(
            <div key={key}> 
              <span>{key+1}.</span>
              <h3>{skill.title}</h3>
              <p> 
              {skill.desc}
              </p>
            </div>    
          ))}
          
        </div>
      </div>
    </section>
  )
}

export default Skill
