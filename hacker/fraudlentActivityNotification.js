function getMedianx2(countArr, days) {
  let sum = 0
  for (let i = 0; i < countArr.length; i++) {
    sum += countArr[i]
    if (sum * 2 === days) return (i * 2 + 1)
    if (sum * 2 > days) return (i * 2)
  }
}
function activityNotifications(debits, days) {
  const countArr = new Array(201).fill(0)
  let notices = 0
  for (let i = 0; i < days; i++) {
    countArr[debits[i]]++
  }
  for (let i = days; i < debits.length; i++) {
    const medianx2 = getMedianx2(countArr, days)
    if (debits[i] >= medianx2) notices++
    if (i === debits.length - 1) break
    countArr[debits[i - days]]--
    countArr[debits[i]]++
  }
  return notices
}

const days = 5
const debits = [2, 3, 4, 2, 3, 6, 8, 4, 5]
console.log(activityNotifications(debits, days))