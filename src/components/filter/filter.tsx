import { FilterObjectInterface, UsersInterface } from "Interface";
import moment from "moment";

const filter = (
  filterArray: UsersInterface[],
  filterObject: FilterObjectInterface
) => {
  let userArray = filterArray;


  const validKey = Object.keys(filterObject).filter((key) => {
    if (filterObject[key as keyof typeof filterObject] !== "") {
      return key;
    }
  });
  for (let i = 0; i < validKey.length; i++) {
    if ((validKey[i] as keyof typeof filterObject) == "phoneNumber") {
      const newArray = userArray.filter((item) => {
        return (
          item["profile"]["phoneNumber"] ==
          filterObject[validKey[i] as keyof typeof filterObject]
        );
      });
      userArray = newArray;
    } else if ((validKey[i] as keyof typeof filterObject) == "date") {
      const formattedDate = moment(
        filterObject[validKey[i] as keyof typeof filterObject]
      ).format("MMM Do YY");
      const newArray = userArray.filter((item) => {
        const userCreatedAt = moment(item["createdAt"]).format("MMM Do YY");
        return userCreatedAt == formattedDate;
      });
      userArray = newArray;
    } else {
      if (filterObject[validKey[i] as keyof typeof filterObject].length) {
        const newArray = userArray.filter((item) => {
          return (
            item[validKey[i] as keyof typeof item] ==
            filterObject[validKey[i] as keyof typeof filterObject]
          );
        });
        userArray = newArray;
      }
    }
  }

  return userArray;
};

export default filter;
