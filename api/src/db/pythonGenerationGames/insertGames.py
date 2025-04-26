import mysql.connector
from datetime import datetime
from dotenv import load_dotenv
import os

load_dotenv()

DB_HOST = os.getenv("DB_HOST")
DB_USER = os.getenv("DB_USER")
DB_PASSWORD = os.getenv("DB_PASSWORD")
DB_NAME = os.getenv("DB_NAME")

conexao = mysql.connector.connect(
    host=DB_HOST,
    user=DB_USER,
    password=DB_PASSWORD,
    database=DB_NAME
)

cursor = conexao.cursor()


dados = [
    ("CS2", "IEM Katowice", "Furia", "MIBR", 16, 12, datetime(2025, 2, 15, 18, 30)),
    ("Valorant", "VCT Americas", "Furia", "Legacy", 13, 8, datetime(2025, 3, 5, 20, 0)),
    ("Futset", "Copa Furia", "Furia", "Spirit", 5, 2, datetime(2025, 4, 10, 15, 0)),
    ("CS2", "BLAST Premier", "Furia", "Legacy", 14, 16, datetime(2025, 5, 2, 17, 45)),
    ("Valorant", "Champions Tour", "Furia", "MIBR", 13, 11, datetime(2025, 6, 1, 21, 15)),
]

sql = """
INSERT INTO gamesEsport 
(game, event, first_team, seconde_team, scoreboard_first_team, scoreboard_seconde_team, date) 
VALUES (%s, %s, %s, %s, %s, %s, %s)
"""

cursor.executemany(sql, dados)

conexao.commit()

print(cursor.rowcount, "dados inseridos com sucesso!")


cursor.close()
conexao.close()
