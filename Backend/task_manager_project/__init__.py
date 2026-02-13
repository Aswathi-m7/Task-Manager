try:
    import pymysql
    pymysql.install_as_MySQLdb()
except ModuleNotFoundError:
    # Fallback to mysqlclient if PyMySQL is not installed in the local env.
    pass
