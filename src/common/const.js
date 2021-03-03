const cidOptions = [
  {
    label: 0,
    value: 0,
  },
  {
    label: 1,
    value: 1,
  },
];

const attOptions = [
  {
    label: "a",
    value: "a",
  },
  {
    label: "b",
    value: "b",
  },
  {
    label: "c",
    value: "c",
  },
  {
    label: "d",
    value: "d",
  },
  {
    label: "e",
    value: "e",
  },
];

const typeOptions = [
  {
    label: "document",
    value: "document",
  },
  {
    label: "hot",
    value: "hot",
  },
  {
    label: "info",
    value: "info",
  },
  {
    label: "notice",
    value: "notice",
  },
];

let cidType = [];
cidOptions.forEach((element) => {
  cidType.push(element.value);
});

let attType = [];

attOptions.forEach((element) => {
  attType.push(element.value);
});

const articleListFromRules = {
  att: [{ type: "enum", enum: attType, message: "请选择att", trigger: "blur" }],
  name: [{ max: 10, message: "长度最多为10字符", trigger: "blur" }],
  author: [{ max: 5, message: "长度最多为5字符", trigger: "blur" }],
  startHits: [{ type: "number", message: "请输入数字", trigger: "blur" }],
  endHits: [{ type: "number", message: "请输入数字", trigger: "blur" }],
};

const commonRule = [
  { min: 10, max: 200, message: "长度在 10 到 200 个字符", trigger: "blur" },
  { required: true, message: "请输入" },
];

const addArticleRules = {
  name: commonRule,
  subname: commonRule,
  source: commonRule,
  cid: [
    { type: "enum", enum: cidType, message: "请选择", trigger: "blur" },
    { required: true, message: "请选择" },
  ],
  att: [
    { type: "enum", enum: attType, message: "请选择", trigger: "blur" },
    { required: true, message: "请选择" },
  ],
};

export {
  cidOptions,
  attOptions,
  articleListFromRules,
  addArticleRules,
  typeOptions,
};
