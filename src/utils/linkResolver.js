// In src/prismic-configuration.js
const linkResolver = doc => {
  // URL for a homepage type
  // if (doc.type === "homepage") {
  //   return "/"
  // }
  // // URL for a post type
  // if (doc.type === "post") {
  //   return `/blog/${doc.uid}`
  // }
  // // URL for a project type
  // if (doc.type === "project") {
  //   return `/projects/${doc.uid}`
  // }
  // // URL for a category type
  // if (doc.type === "category") {
  //   return `/projects/category/${doc.uid}`
  // }
  // URL for a page type
  if (doc.type === "page") {
    return `/${doc.uid}`
  }
  // URL for a menu type
  if (doc.type === "menu") {
    return `/${doc.uid}`
  }

  // Backup for all other types
  return "/"
}
module.exports = linkResolver
