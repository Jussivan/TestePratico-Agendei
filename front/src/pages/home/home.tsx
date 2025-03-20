import TaskCard from '../../components/taskCard/taskCard';

function Home() {
  return (
    <div className='min-h-screen bg-neutral-100 pt-25 py-10 px-50'>
      <div className='grid grid-cols-2 gap-10'>
      <TaskCard/><TaskCard/>
    </div>
    </div>
  )
}

export default Home;