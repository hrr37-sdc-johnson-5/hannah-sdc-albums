# Bandland 
> Bandland is a web application that allows artists to share music with fans and allows fans to support their favorite artists.

> I am taking an existing codebase of a web application and scaling it to support (a minimum of) 100 requests per second on EC2 using a t2.micro instance. The original codebase was created to handle 100 data records, and I will be scaling it to generate and seed 10M records. This involves refactoring and essentially recreating the database. I will also be building out CRUD API routes that will query and use the new database.  

## Related Projects

  - https://github.com/team-amy/ana-service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## CRUD API Routes 

Purpose | Path | HTTP Verb | Request body        | Response body
--- | --- | --- | --- | --- 
read (view) all recommended albums | api/albums/:id | GET | none |  [{id: '01', albumName: 'cool dog', artist: 'Bandwidth', albumArt: '/path/to/img', tags: 'pop, psychedelic', description: '...' }, {id: '02', albumName: 'fun tunes', artist: 'Bimby', albumArt: '/path/to/img', description: '...', tags: 'pop, trance' }]
create new album | api/albums/:id | POST | {id: '03', albumName: 'bark', artist: 'Joyknee', albumArt: '/path/to/img', description: '...', tags: 'pop, soul'} | {id: '03', albumName: 'bark', artist: 'Joyknee', albumArt: '/path/to/img', description: '...', tags: 'pop, soul'}
update existing album | api/albums/:id | PUT | {id: '04', albumName: 'dem boyz', artist: 'Ziggyzag', albumArt: '/path/to/img', description: './.', tags: 'pop, funk' } | {id: '04', albumName: 'dem boyz', artist: 'Ziggyzag', albumArt: '/path/to/img', description: 'new...desc', tags: 'pop, funk' }
delete specific album | api/albums/:id | DELETE | {id: '05', albumName: 'wambam', artist: 'Sassee', albumArt: '/path/to/img', description: '...', tags: 'pop, electro'} | {id: '05', albumName: 'wambam', artist: 'Sassee', albumArt: '/path/to/img', description: '...', tags: 'pop, electro'}

