# README

## Server Start
- docker-compose up
- docker-compose exec web bin/webpack-dev-server

## Prettier
- docker-compose run --rm web yarn run prettier

## RuboCop
- docker-compose run --rm web web rubocop -c .rubocop.yml

## TODO
- CircleCI
- Test
