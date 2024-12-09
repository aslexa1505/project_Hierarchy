import { v4 as uuidv4 } from "uuid";

/**
 * Преобразует массив объектов в иерархическую структуру для компонента Tree.
 * @param {Array} data - Входные данные.
 * @returns {Array} Массив узлов дерева.
 */
export const buildTree = (data) => {
  const tree = {};

  data.forEach((item) => {
    // Проверяем, содержит ли запись любое null значение
    const hasNull = Object.values(item).some((value) => value === null);
    if (hasNull) {
      // Если есть null, пропускаем эту запись
      return;
    }

    let currentLevel = tree;

    const keys = Object.keys(item);

    keys.forEach((key) => {
      const value = item[key];
      if (value) {
        if (!currentLevel[value]) {
          currentLevel[value] = { __children: {} };
        }
        currentLevel = currentLevel[value].__children;
      }
    });
  });

  // Функция для рекурсивного преобразования объекта в массив узлов дерева
  const convertToTreeNodes = (obj) => {
    return Object.entries(obj).map(([key, value]) => {
      const nodeKey = uuidv4(); // Генерация уникального ключа
      return {
        title: key,
        key: nodeKey,
        children: convertToTreeNodes(value.__children),
      };
    });
  };

  return convertToTreeNodes(tree);
};
