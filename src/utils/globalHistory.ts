// @ts-nocheck
import { createBrowserHistory as createHistory } from 'history';

/**
 * 全局 history 对象
 */
const globalHistory = createHistory({ basename: '/' });

/**
 * 强制刷新的 history，需要强制刷新的特殊页面会用到
 */
const globalHistoryForceRefresh = createHistory({
  forceRefresh: true,
});

export default globalHistory;
export { globalHistory, globalHistoryForceRefresh, createHistory };
