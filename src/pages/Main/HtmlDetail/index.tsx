// @ts-ignore
import { Divider, Tree, TreeDataType } from "antd";
import { DataNode, EventDataNode } from "antd/lib/tree";
import Loading from "components/Loading";
import htmlDetailData from "constants/knowledge/html/htmlDetailData";
import React, {
  Key,
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useRouteMatch } from "react-router";
import style from "./markdown.module.scss";

export default function HtmlDetail() {
  const ref = useRef();
  const { params = { name: "" } }: any = useRouteMatch();

  const [menuData, setMenuDataType] = useState<TreeDataType[]>();
  const [selectedKeys, setSelectedKeys] = useState<Key[]>();

  const getTitleMenuData = useCallback((elementNode: HTMLElement[]) => {
    setMenuDataType(() =>
      elementNode?.map((item, index) => ({
        top: item.offsetTop,
        selected: index === 0,
        title: item.textContent,
        key: index + "" + item.localName,
      }))
    );
  }, []);
  useEffect(() => {
    setSelectedKeys([menuData?.[0]?.key]);
  }, [menuData]);

  useEffect(() => {
    const childrenNodes = [...(ref.current as any)?.childNodes]?.filter(
      (item: HTMLElement) => /^[Hh]/.test(item.nodeName)
    );
    console.log("childrenNodes=====>", childrenNodes);

    getTitleMenuData(childrenNodes);
  }, [getTitleMenuData]);

  const Detail = useMemo(
    () => htmlDetailData.find((item) => item.value === params?.name)?.detail,
    [params?.name]
  );

  const clickTree = useCallback(
    (
      selectedKeys: Key[],
      info: {
        event: "select";
        selected: boolean;
        node: EventDataNode;
        selectedNodes: DataNode[];
        nativeEvent: MouseEvent;
      }
    ) => {
      const top = menuData?.find((item) => item.key === selectedKeys[0])?.top;
      setSelectedKeys(selectedKeys);
      window.scrollTo(0, top - 64 || 0);
    },
    [menuData]
  );

  return (
    <Suspense fallback={<Loading />}>
      <div className={style.detailBody}>
        <div
          ref={ref as any}
          className={style.markdown}
          dangerouslySetInnerHTML={{ __html: Detail }}
        ></div>
        {menuData?.length !== 0 && (
          <div className={style.menuBox}>
            <Divider>目录</Divider>
            <Tree
              treeData={menuData}
              selectedKeys={selectedKeys}
              onSelect={clickTree}
            />
          </div>
        )}
      </div>
    </Suspense>
  );
}
