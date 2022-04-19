import {
  All_Institutions_Fail,
  All_Institutions_Request,
  All_Institutions_Success,
  Create_Institution_Request,
  Create_Institution_Success,
  Create_Institution_Fail,
  Delete_Institution_Request,
  Delete_Institution_Success,
  Delete_Institution_Fail,
  Delete_Institution_Reset,
  CLEAR_ERRORS,
} from "../constants/institutionConstants";

export const institutionsReducers = (state = { institutions: [] }, action) => {
  switch (action.type) {
    case All_Institutions_Request:
      return {
        loading: true,
        institutions: [],
      };
    case All_Institutions_Success:
      return {
        loading: false,
        institutions: action.payload.institutions,
      };
    case All_Institutions_Fail:
      return {
        loading: false,
        error: action.payload,
      };

    case Create_Institution_Request:
      return {
        loading: true,
        institutions: [],
      };
    case Create_Institution_Success:
      return {
        loading: false,
        institutions: [...state.institutions, action.payload.institution],
      };
    case Create_Institution_Fail:
      return {
        loading: false,
        error: action.payload,
      };
    case Delete_Institution_Request:
      return {
        loading: true,
        institutions: [],
      };
    case Delete_Institution_Success:
      return {
        loading: false,
        institutions: state.institutions.filter(
          (institution) => institution._id !== action.payload.id
        ),
      };
    case Delete_Institution_Fail:
      return {
        loading: false,
        error: action.payload,
      };

    case Delete_Institution_Reset:
      return {
        ...state,
        isDeleted: false,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
