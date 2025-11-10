---
theme: ./
layout: cover
routeAlias: cover
---

# Presentation title

::subtitle::
Presentation subtitle

Author and Date

---
layout: intro
routeAlias: intro
---

# Presentation title

::subtitle::
Presentation subtitle

Author and Date

---
routeAlias: default
---

# Slide Title

## Slide Subtitle

* Slide bullet text

---
routeAlias: default-dark
color: dark
---

# Slide Title

## Slide Subtitle

* Slide bullet text

---
layout: two-cols-header
routeAlias: two-cols-header
---

# Slide Title

## Slide header

* Top slide bullet text
* Top slide bullet text
* Top slide bullet text

::left::

* Left slide bullet text
* Left slide bullet text
* Left slide bullet text

::right::

* Right slide bullet text
* Right slide bullet text
* Right slide bullet text

::bottom::

* Bottom slide bullet text
* Bottom slide bullet text
* Bottom slide bullet text

---
layout: two-cols-header
color: dark
routeAlias: two-cols-header-dark
---

# Slide Title

## Slide header

* Top slide bullet text
* Top slide bullet text
* Top slide bullet text

::left::

* Left slide bullet text
* Left slide bullet text
* Left slide bullet text

::right::

* Right slide bullet text
* Right slide bullet text
* Right slide bullet text

::bottom::

* Bottom slide bullet text
* Bottom slide bullet text
* Bottom slide bullet text

---
layout: image-right
routeAlias: image-right
image: https://images.unsplash.com/photo-1502189562704-87e622a34c85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80
---

# Slide Title

Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

---
layout: section
routeAlias: section
---

# Section Title

---
layout: section
color: dark
routeAlias: section-dark
---

# Section Title

---
layout: statement
routeAlias: statement
---

# Statement

---
layout: statement
color: dark
routeAlias: statement-dark
---

# Statement

---
layout: fact
routeAlias: fact
---

# 100%
Fact information

---
layout: fact
color: dark
routeAlias: fact-dark
---

# 100%
Fact information

---
layout: quote
routeAlias: quote
---

# "Notable quote"
Attribution

---
layout: quote
color: dark
routeAlias: quote-dark
---

# "Notable quote"
Attribution

---
layout: image-left
routeAlias: image-left
image: https://images.unsplash.com/photo-1502189562704-87e622a34c85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80
---

# Code

```ts {all|2|1-6|all}
interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}

function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id)
  const newUser = { ...user, ...update }
  saveUser(id, newUser)
}
```

---
layout: center
routeAlias: center
class: "text-center"
---

# Learn More

[Documentations](https://sli.dev) / [GitHub Repo](https://github.com/slidevjs/slidev)

---
layout: end
routeAlias: end
---

# Learn More

[Documentations](https://sli.dev) / [GitHub Repo](https://github.com/slidevjs/slidev)
