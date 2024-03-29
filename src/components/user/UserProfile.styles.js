import styled, {css} from "styled-components";

const white = `#FFFFFF`
const greyLight2 = `#c8d0e7`
const primary = `#6d5dfc`
const greyDark = `#9baacf`

const innerShadow = `
    inset .2rem .2rem .5rem ${greyLight2}, 
    inset -.2rem -.2rem .5rem ${white}`

const shadow = `
    .3rem .3rem .6rem ${greyLight2}, 
    -.2rem -.2rem .5rem ${white}`

const baseButtonStyles = css`
  width: 20em;
  height: 2em;
  border-radius: 1em;
  box-shadow: ${shadow};
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: .3s ease;
  grid-column: 1 / 2;
  grid-row: 5 / 6;
  color: ${greyDark};
  margin-bottom: 10px;

  &:hover {
    color: ${primary}
  }

  &:active {
    box-shadow: ${innerShadow};
  }

  p {
    font-size: 1.6em;
  }
`

export const EditButton = styled.button`
  ${baseButtonStyles}
  &:hover {
    background-color: #1da1f2;
    color: white;
  }
`

export const DangerButton = styled.button`
  ${baseButtonStyles}
  &:hover {
    background-color: #ea2929;
    color: white;
  }
`

export const InfoButton = styled.button`
  ${baseButtonStyles}
  &:hover {
    background-color: #93ff1d;
    color: black;
  }
`

export const InfoButtonClicked = styled.button`
  width: 20em;
  height: 2em;
  border-radius: 1em;
  box-shadow: ${innerShadow};
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: .3s ease;
  grid-column: 1 / 2;
  grid-row: 5 / 6;
  margin-bottom: 10px;
  color: black;
  background-color: #93ff1d;
`

export const OwnershipFormRestaurantButton = styled.button `
  width: 6.3em;
  height: 3em;
  border-radius: 1em;
  box-shadow: ${shadow};
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: .3s ease;
  color: ${greyDark};

  &:hover {
    color: ${primary}
  }

  &:active {
    box-shadow: ${innerShadow};
  }

  p {
    font-size: 1.6em;
  }
`
export const OwnershipFormRestaurantButtonChecked = styled.button `
  width: 6.3em;
  height: 3em;
  border-radius: 1em;
  box-shadow: ${innerShadow};
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: .3s ease;
  color: ${primary};
  background-color: #93ff1d;

  p {
    font-size: 1.6em;
  }
`

export const UserProfileGrid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 0.2fr 1fr;
  grid-template-columns: 0.5fr 1fr;
`

export const UserProfileDetails = styled.div`
  margin: 5vh 0 0 5vh;
  height: 81vh;
  width: 28vw;
  border-radius: 1em;
  box-shadow: ${shadow};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const UserContributePanel = styled.div`
  display: grid;
  grid-template-rows: 0.1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 5vh 0 0 5vh;
  height: 81vh;
  width: 64vw;
  border-radius: 1em;
  box-shadow: ${shadow};
`

export const UserCredentialsPanel = styled.div`
  justify-content: flex-start;
  width: 20em;
`

export const UserImage = styled.img`
  padding: 10px;
`

export const ReviewGridPlace = styled.div `
  grid-column-start: 1;
  grid-row-start: 1;
  margin: auto;
`
export const RestaurantGridPlace = styled.div `
  grid-column-start: 2;
  grid-row-start: 1;
  margin: auto;
`
export const OwnedRestaurantGridPlace = styled.div `
  grid-column-start: 3;
  grid-row-start: 1;
  margin: auto;
`

export const ContributeContentList = styled.div `
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  margin-left: 8px;
`

export const UserProfileText = styled.p `
  text-align: center;
  font-size: 22px;
  padding: 6px;
`
export const RestaurantListContainer = styled.div `
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 10px;
`

export const ContributionItem = styled.div `
  width: 63vw;
  height: 3em;
  margin-bottom: 10px;
  border-radius: 1em;
  box-shadow: ${shadow};
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${greyDark};
`
export const ContributionText = styled.p `
  margin: auto;
`

export const UserProfileHeader = styled.div `
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
`

export const EditOwnedRestaurantButton = styled.button `
  padding: 0 5px 0 5px;
  height: 2em;
  border-radius: 1em;
  box-shadow: ${shadow};
  cursor: pointer;
  transition: .3s ease;
  margin-right: 10px;
  grid-column: 1 / 2;
  grid-row: 5 / 6;
  color: ${greyDark};

  &:hover {
    color: ${white};
    background-color: #1da1f2;
  }

  &:active {
    box-shadow: ${innerShadow};
  }

  p {
    font-size: 1.6em;
  }
`