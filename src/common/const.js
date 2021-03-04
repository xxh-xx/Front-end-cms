//文章管理
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

//项目管理
const projectStateOptions = [
  {
    label: "未通过",
    value: "未通过",
  },
  {
    label: "未审核",
    value: "未审核",
  },
  {
    label: "通过",
    value: "通过",
  },
];

let stateType = [];

projectStateOptions.forEach((element) => {
  stateType.push(element.value);
});

const applyForFormItemData = [
  {
    placeholder: "请输入申报人id",
    name: "pid",
    prop: "pid",
    type: "input.number",
  },
  {
    placeholder: "请输入申报项目id",
    name: "rid",
    prop: "rid",
    type: "input.number",
  },
  {
    placeholder: "请选择att",
    name: "att",
    prop: "att",
    type: "select",
    options: attOptions,
  },
  {
    placeholder: "选择项目申报开始日期",
    name: "startDate",
    prop: "startDate",
    type: "date",
  },
  {
    placeholder: "选择项目申报结束日期",
    name: "endDate",
    prop: "endDate",
    type: "date",
  },
  {
    placeholder: "请选择项目状态",
    name: "state",
    prop: "state",
    type: "select",
    options: projectStateOptions,
  },
];

const collectForFormItemData = [
  {
    placeholder: "请选择分类",
    name: "cid",
    prop: "cid",
    type: "select",
    options: cidOptions,
  },
  {
    placeholder: "项目名",
    name: "name",
    prop: "name",
    type: "input.text",
  },
  {
    placeholder: "请选择att",
    name: "att",
    prop: "att",
    type: "select",
    options: attOptions,
  },
  {
    placeholder: "作者",
    name: "author",
    prop: "author",
    type: "input.text",
  },
  {
    placeholder: "选择开始日期",
    name: "startDate",
    prop: "startDate",
    type: "date",
  },
  {
    placeholder: "选择结束日期",
    name: "endDate",
    prop: "endDate",
    type: "date",
  },
];

const researchForFormItemData = [
  {
    placeholder: "请选择项目分类",
    name: "cid",
    prop: "cid",
    type: "select",
    options: cidOptions,
  },
  {
    placeholder: "请输入项目名称",
    name: "name",
    prop: "name",
    type: "input.text",
  },
  {
    placeholder: "请输入项目承担人",
    name: "leader",
    prop: "leader",
    type: "input.text",
  },
  {
    placeholder: "请选择att",
    name: "att",
    prop: "att",
    type: "select",
    options: attOptions,
  },
  {
    placeholder: "选择项目申报开始日期",
    name: "startDate",
    prop: "startDate",
    type: "date",
  },
  {
    placeholder: "选择项目申报结束日期",
    name: "endDate",
    prop: "endDate",
    type: "date",
  },
];

const projectQueryRules = {
  pid: [{ type: "number", message: "请输入数字", trigger: "blur" }],
  rid: [{ type: "number", message: "请输入数字", trigger: "blur" }],
  att: [{ type: "enum", enum: attType, message: "请选择att", trigger: "change" }],
  startDate: [{ type: "date", message: "请选择时间", trigger: "change" }],
  endDate: [{ type: "date", message: "请选择时间", trigger: "change" }],
  state: [
    {
      type: "enum",
      enum: stateType,
      message: "请选择项目状态",
      trigger: "change",
    },
  ],
  cid: [{ type: "enum", enum: cidType, message: "请选择", trigger: "change" }],
};

export {
  cidOptions,
  attOptions,
  articleListFromRules,
  addArticleRules,
  typeOptions,
  projectStateOptions,
  applyForFormItemData,
  collectForFormItemData,
  researchForFormItemData,
  projectQueryRules,
};
