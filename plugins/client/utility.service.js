export class UtilityService {
  // saat isi arraynya tidak hanya objeknya
  // tetapi ada getter setter dll dari vue select / table
  // gunakan ini agar arraynya bersih
  cleanArray (select) {
    const newArray = []
    select.forEach((element) => {
      const data = {}
      Object.keys(element).forEach((key) => {
        data[key] = element[key]
      })
      newArray.push(data)
    })
    return newArray
  }

  readableDate (date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return date.toLocaleDateString('id-ID', options)
  }
}
