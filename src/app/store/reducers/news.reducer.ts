import * as news from '../actions/news.actions';
import { News } from '../../models/news';

export interface State {
  news: News[];
}
export const initialState: State = {
  news: []
};

export function newsReducer(state = initialState, action: news.Actions): State {
  switch (action.type) {
    case news.ADD_NEWS_EVENT: {
      state.news.push(action.payload);
      return { ...state };
    }
    case news.REMOVE_NEWS_EVENT: {
      const newArr = state.news.filter(item => item.id !== action.payload);
      return {...state, news: [...newArr] };
    }
    case news.READ_NEWS_EVENT: {
      state.news.forEach(item => {
          if (item.id === action.payload) {
            item.readed = true;
          }
      });
      return {...state};
    }
    default: {
      return state;
    }
  }
}

export const getNews = (state) => state.newsReducer.news;
