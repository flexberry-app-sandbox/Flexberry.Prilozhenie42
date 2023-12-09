docker build --no-cache -f SQL\Dockerfile.PostgreSql -t prilozhenie_42/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t prilozhenie_42/app ../..
