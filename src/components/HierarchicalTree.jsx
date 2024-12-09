import React, { useEffect, useState } from "react";
import { Tree, Empty } from "antd";
import { buildTree } from "../utils/buildTree";

/**
 * Компонент для отображения иерархического дерева.
 * @param {Array} data - Входные данные для построения дерева.
 */
const HierarchicalTree = ({ data }) => {
  const [treeData, setTreeData] = useState([]);

  useEffect(() => {
    const transformedTree = buildTree(data);
    setTreeData(transformedTree);
  }, [data]);

  const treeRoot = {
    title: "All categories",
    key: "tree_root",
    children: treeData,
  };

  /**
   * Обработчик события проверки чекбокса.
   * @param {Array} checkedKeys - Массив выбранных ключей.
   * @param {Object} info - Дополнительная информация о событии.
   */
  const onCheck = (checkedKeys, info) => {
    console.log("Checked keys:", checkedKeys);
    console.log("Info:", info);
  };

  return (
    <div className="tree-container">
      {treeData.length > 0 ? (
        <Tree
          checkable
          defaultExpandAll
          treeData={[treeRoot]}
          onCheck={onCheck}
        />
      ) : (
        <Empty description="Нет доступных категорий для отображения." />
      )}
    </div>
  );
};

export default HierarchicalTree;
