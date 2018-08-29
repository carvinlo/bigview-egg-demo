const sleep = ms => new Promise(r => setTimeout(r, ms))

module.exports = async function fetch () {
  // simulation fetch time
  await sleep(1000)

  const logo = '/public/temp.jpeg'
  const headline = 'Main'

  // simulation data
  return { logo, headline }
}
