import {IPizza} from "../models/IPizza";

export const generateModification = (index: number, num: number, active: string, notActive: string) : string =>  {
  if (index == num) {
    return active
  }
  return notActive
}

export const generatePizzaArr = (arr: IPizza[], filter: string, sort: number) => {
  console.log(filter);
  return (
    arr
      ?.filter(item => {
        if (filter == 'All') return item
        if (item.type === filter) {
          return item
        }
      })
      ?.sort((a: IPizza, b: IPizza) => {
        if (sort == 2) {
          return +a.price[0] - +b.price[0]
        }

        if (sort == 3) {
          return a.name.localeCompare(b.name)
        }

        return +a - +b
      }))

  // (a: IPizza, b: IPizza) => {
  //   if (sort == 2) {
  //     return +a.price[0] - +b.price[0]
  //   }
  //
  //   if (sort == 3) {
  //     return +a.price[0] - +b.price[0]
  //   }
  //
  //   return +a - +b
  // })

}
