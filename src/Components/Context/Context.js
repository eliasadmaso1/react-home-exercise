import { useContext,createContext } from 'react';

export const ArticleContext = createContext();
export const ArticleProvider = ArticleContext.Provider;

export function useArticleContext(){
    return useContext(ArticleContext)
}