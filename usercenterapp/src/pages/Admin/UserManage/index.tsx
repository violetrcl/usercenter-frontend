// import React, { useRef } from 'react';
// import type { ProColumns, ActionType } from '@ant-design/pro-components';
// import { ProTable, TableDropdown } from '@ant-design/pro-components';
// import { searchUserList } from "@/services/ant-design-pro/api";
// import {Image} from "antd";
//
// const columns: ProColumns<API.CurrentUser>[] = [
//   {
//     dataIndex: 'userId',
//     valueType: 'indexBorder',
//     width: 48,
//   },
//   {
//     title: '用户名',
//     dataIndex: 'username',
//     copyable: true,
//   },
//   {
//     title: '用户账号',
//     dataIndex: 'userAccount',
//     copyable: true,
//   },
//   {
//     title: '用户头像',
//     dataIndex: 'userAvatarUrl',
//     render: (_, record) => (
//       <div>
//         <Image src={record.userAvatarUrl} width={100} />
//       </div>
//     ),
//   },
//   {
//     title: '用户性别',
//     dataIndex: 'userGender',
//   },
//   {
//     title: '用户电话',
//     dataIndex: 'userPhone',
//     copyable: true,
//   },
//   {
//     title: '用户邮件',
//     dataIndex: 'userEmail',
//     copyable: true,
//   },
//   {
//     title: '用户状态',
//     dataIndex: 'userStatus',
//   },
//   // {
//   //   title: '星球编号',
//   //   dataIndex: 'planetCode',
//   // },
//   {
//     title: '用户角色',
//     dataIndex: 'userRole',
//     valueType: 'select',
//     valueEnum: {
//       0: {
//         text: '普通用户',
//         status: 'Default'
//       },
//       1: {
//         text: '管理员',
//         status: 'Admin',
//       },
//     },
//   },
//   {
//     title: '创建时间',
//     dataIndex: 'createTime',
//     valueType: 'dateTime',
//   },
//   {
//     title: '操作',
//     valueType: 'option',
//     render: (text, record, _, action) => [
//       <a
//         key="editable"
//         onClick={() => {
//           // @ts-ignore
//           action?.startEditable?.(record.userId);
//         }}
//       >
//         编辑
//       </a>,
//       // <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
//       //   查看
//       // </a>,
//       <TableDropdown
//         key="actionGroup"
//         onSelect={() => action?.reload()}
//         menus={[
//           { key: 'copy', name: '复制' },
//           { key: 'delete', name: '删除' },
//         ]}
//       />,
//     ],
//   },
// ];
//
// export default () => {
//   const actionRef = useRef<ActionType>();
//   return (
//     <ProTable<API.CurrentUser>
//       columns={columns}
//       actionRef={actionRef}
//       cardBordered
//
//       // @ts-ignore
//       request={async (params : API.CurrentUser & {
//         pageSize: number;
//         current: number;
//       },sort, filter) => {
//         console.log(sort, filter);
//         const userList = await searchUserList({
//           page: params.current,
//           pageSize: params.pageSize,
//         });
//         return {
//           data: userList,
//         }
//       }}
//
//       editable={{
//         type: 'multiple',
//       }}
//       columnsState={{
//         persistenceKey: 'pro-table-singe-demos',
//         persistenceType: 'localStorage',
//       }}
//       rowKey="id"
//       search={{
//         labelWidth: 'auto',
//       }}
//       form={{
//         // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
//         syncToUrl: (values, type) => {
//           if (type === 'get') {
//             return {
//               ...values,
//               created_at: [values.startTime, values.endTime],
//             };
//           }
//           return values;
//         },
//       }}
//       pagination={{
//         pageSize: 5,
//       }}
//       dateFormatter="string"
//       headerTitle="高级表格"
//     />
//   );
// };
