'use client';
import CountUp from 'react-countup'

const AnimatedCounter = ({amount}:{amount:number}) => {
  return (
    <div className='w-full'>
      <CountUp 
        decimal=","
        duration={1}
        prefix="₹"
        end={amount}
        decimals={2}
      />
    </div>
  )
}

export default AnimatedCounter
