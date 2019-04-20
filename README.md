# Bandland 
> Bandland is a web application that allows for artists to share music with fans and for fans to support them. 

Tasked with reworking backend of web application to improve scalability and handle higher traffic
- Creating data generation script and scaling database to generate and seed 10M records. Stress testing and analyzing two databases, PostgreSQL and Cassandra, to determine best performance for the use case. 
- Building out CRUD API routes that will query and use the new database. Performance tuning as needed.
- Scaling codebase to support (a minimum of) 100 requests per second on EC2 using a t2.micro instance. 


## Related Projects

  - https://github.com/team-amy/ana-service
  - https://github.com/hrr37-sdc-johnson-5/sdc-johnson-cody
  - https://github.com/hrr37-sdc-johnson-5/Nam-s-Service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 7.6.0+

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install -g nodemon
npm install
```

## CRUD API Routes 

Purpose | Path | HTTP Verb | Request body        | Response body
--- | --- | --- | --- | --- 
read (view) all recommended albums | api/albums/:id | GET | none |  [{id: '01', albumName: 'cool dog', artist: 'Bandwidth', albumArt: '/path/to/img', tags: 'pop, psychedelic', description: '...' }, {id: '02', albumName: 'fun tunes', artist: 'Bimby', albumArt: '/path/to/img', description: '...', tags: 'pop, trance' }]
create new album | api/albums/:id | POST | {id: '03', albumName: 'bark', artist: 'Joyknee', albumArt: '/path/to/img', description: '...', tags: 'pop, soul'} | {id: '03', albumName: 'bark', artist: 'Joyknee', albumArt: '/path/to/img', description: '...', tags: 'pop, soul'}
update existing album | api/albums/:id | PUT | {id: '04', albumName: 'dem boyz', artist: 'Ziggyzag', albumArt: '/path/to/img', description: './.', tags: 'pop, funk' } | {id: '04', albumName: 'dem boyz', artist: 'Ziggyzag', albumArt: '/path/to/img', description: 'new...desc', tags: 'pop, funk' }
delete specific album | api/albums/:id | DELETE | {id: '05', albumName: 'wambam', artist: 'Sassee', albumArt: '/path/to/img', description: '...', tags: 'pop, electro'} | {id: '05', albumName: 'wambam', artist: 'Sassee', albumArt: '/path/to/img', description: '...', tags: 'pop, electro'}

