const {firstQueue} =  require('./main');

firstQueue.process('primaryTask',async (job) => {
    console.log('first job.')
    console.log(job.data);
    return;
});

firstQueue.process('secondTask', async (job) => {
    console.log("second job");
  console.log(job.data);
  return;
});