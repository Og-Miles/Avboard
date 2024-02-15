"use client";

import { Table, Checkbox } from "flowbite-react";
import React from "react";
import { FileType } from "../../../typings";

const TableFile = ({ skeletonLoader }: { skeletonLoader: FileType[] }) => {
  return (
    <div className='overflow-x-auto mt-10 px-10'>
      <button
        type='button'
        className='focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-3 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'
      >
        Sort by
      </button>
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell className='p-4'></Table.HeadCell>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Color</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className='sr-only'>Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className='divide-y'>
          <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
            <Table.Cell className='p-4'>
              <Checkbox />
            </Table.Cell>
            <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
              {'Apple MacBook Pro 17"'}
            </Table.Cell>
            <Table.Cell>Sliver</Table.Cell>
            <Table.Cell>Laptop</Table.Cell>
            <Table.Cell>$2999</Table.Cell>
            <Table.Cell>
              <a
                href='#'
                className='font-medium text-avilia hover:underline dark:text-cyan-500'
              >
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
            <Table.Cell className='p-4'>
              <Checkbox />
            </Table.Cell>
            <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
              Microsoft Surface Pro
            </Table.Cell>
            <Table.Cell>White</Table.Cell>
            <Table.Cell>Laptop PC</Table.Cell>
            <Table.Cell>$1999</Table.Cell>
            <Table.Cell>
              <a
                href='#'
                className='font-medium text-avilia hover:underline dark:text-cyan-500'
              >
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
            <Table.Cell className='p-4'>
              <Checkbox />
            </Table.Cell>
            <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
              Magic Mouse 2
            </Table.Cell>
            <Table.Cell>Black</Table.Cell>
            <Table.Cell>Accessories</Table.Cell>
            <Table.Cell>$99</Table.Cell>
            <Table.Cell>
              <a
                href='#'
                className='font-medium text-avilia hover:underline dark:text-cyan-500'
              >
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default TableFile;
