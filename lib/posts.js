import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const postsDirectory_js = path.join(process.cwd(), 'posts/js');
const postsDirectory_react = path.join(process.cwd(), 'posts/react');
const postsDirectory_others = path.join(process.cwd(), 'posts/others');
const postsDirectory_log = path.join(process.cwd(), 'posts/log');

function setPostsDataObj(fileNames, postsDirectory) {
  return fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    return {
      id,
      ...matterResult.data,
    };
  });
}

export function getAllPosts() {
  const js_fileNames = fs.readdirSync(postsDirectory_js, 'utf-8');
  const react_fileNames = fs.readdirSync(postsDirectory_react, 'utf-8');
  const others_fileNames = fs.readdirSync(postsDirectory_others, 'utf-8');
  const log_fileNames = fs.readdirSync(postsDirectory_log, 'utf-8');
  const allPosts = [
    ...setPostsDataObj(js_fileNames, postsDirectory_js),
    ...setPostsDataObj(react_fileNames, postsDirectory_react),
    ...setPostsDataObj(others_fileNames, postsDirectory_others),
    ...setPostsDataObj(log_fileNames, postsDirectory_log),
  ];

  return allPosts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// export function getAllPostIds() {
//   const fileNames = fs.readdirSync(postsDirectory)
//   return fileNames.map(fileName => {
//     return {
//       params: {
//         id: fileName.replace(/\.md$/, '')
//       }
//     }
//   })
// }

// export async function getPostData(id) {
//   const fullPath = path.join(postsDirectory, `${id}.md`)
//   const fileContents = fs.readFileSync(fullPath, 'utf8')

//   // Use gray-matter to parse the post metadata section
//   const matterResult = matter(fileContents)

//   // Use remark to convert markdown into HTML string
//   const processedContent = await remark()
//     .use(html)
//     .process(matterResult.content)
//   const contentHtml = processedContent.toString()

//   // Combine the data with the id and contentHtml
//   return {
//     id,
//     contentHtml,
//     ...matterResult.data
//   }
// }
