"""empty message

Revision ID: 173bd34f81a8
Revises: 2e0f61d8de83
Create Date: 2024-05-02 12:28:19.640628

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = '173bd34f81a8'
down_revision = '2e0f61d8de83'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('trees',
    sa.Column('tree_id', sa.NVARCHAR(length=40), nullable=False),
    sa.Column('number', sa.Integer(), nullable=True),
    sa.Column('water', sa.Integer(), nullable=True),
    sa.Column('fert', sa.Integer(), nullable=True),
    sa.Column('user_id', sa.NVARCHAR(length=40), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.user_id'], ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('tree_id', 'user_id')
    )
    with op.batch_alter_table('groupss', schema=None) as batch_op:
        batch_op.alter_column('group_id',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               type_=sa.NVARCHAR(length=40),
               existing_nullable=False)
        batch_op.alter_column('group_title',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=100),
               type_=sa.NVARCHAR(length=100),
               existing_nullable=True)
        batch_op.alter_column('user_id',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               type_=sa.NVARCHAR(length=40),
               existing_nullable=False)
        batch_op.alter_column('color',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=10),
               type_=sa.NVARCHAR(length=10),
               existing_nullable=True)
        batch_op.alter_column('def_tag',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               type_=sa.NVARCHAR(length=40),
               existing_nullable=True)

    with op.batch_alter_table('tags', schema=None) as batch_op:
        batch_op.alter_column('tag_id',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               type_=sa.NVARCHAR(length=40),
               existing_nullable=False)
        batch_op.alter_column('tag_title',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=100),
               type_=sa.NVARCHAR(length=100),
               existing_nullable=True)
        batch_op.alter_column('tag_color',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=10),
               type_=sa.NVARCHAR(length=10),
               existing_nullable=True)
        batch_op.alter_column('user_id',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               type_=sa.NVARCHAR(length=40),
               existing_nullable=False)
        batch_op.alter_column('group_id',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               type_=sa.NVARCHAR(length=40),
               existing_nullable=False)

    with op.batch_alter_table('tasks', schema=None) as batch_op:
        batch_op.alter_column('task_id',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               type_=sa.NVARCHAR(length=40),
               existing_nullable=False)
        batch_op.alter_column('task_title',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=100),
               type_=sa.NVARCHAR(length=100),
               existing_nullable=True)
        batch_op.alter_column('task_description',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=500),
               type_=sa.NVARCHAR(length=500),
               existing_nullable=True)
        batch_op.alter_column('tag_id',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               type_=sa.NVARCHAR(length=40),
               existing_nullable=False)
        batch_op.alter_column('user_id',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               type_=sa.NVARCHAR(length=40),
               existing_nullable=False)

    with op.batch_alter_table('teamgroupss', schema=None) as batch_op:
        batch_op.alter_column('group_id',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               type_=sa.NVARCHAR(length=40),
               existing_nullable=False)
        batch_op.alter_column('group_title',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=100),
               type_=sa.NVARCHAR(length=100),
               existing_nullable=True)
        batch_op.alter_column('author_id',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               type_=sa.NVARCHAR(length=40),
               existing_nullable=False)
        batch_op.alter_column('color',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=10),
               type_=sa.NVARCHAR(length=10),
               existing_nullable=True)
        batch_op.alter_column('def_tag',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               type_=sa.NVARCHAR(length=40),
               existing_nullable=True)
        batch_op.alter_column('team_id',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               type_=sa.NVARCHAR(length=40),
               existing_nullable=False)

    with op.batch_alter_table('teams', schema=None) as batch_op:
        batch_op.add_column(sa.Column('team_code', sa.NVARCHAR(length=100), nullable=True))
        batch_op.alter_column('team_id',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               type_=sa.NVARCHAR(length=40),
               existing_nullable=False)
        batch_op.alter_column('team_name',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=100),
               type_=sa.NVARCHAR(length=100),
               existing_nullable=True)
        batch_op.alter_column('team_description',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=500),
               type_=sa.NVARCHAR(length=500),
               existing_nullable=True)
        batch_op.alter_column('admin_id',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               type_=sa.NVARCHAR(length=40),
               existing_nullable=False)
        batch_op.drop_column('team_password')

    with op.batch_alter_table('teamtags', schema=None) as batch_op:
        batch_op.alter_column('tag_id',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               type_=sa.NVARCHAR(length=40),
               existing_nullable=False)
        batch_op.alter_column('tag_title',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=100),
               type_=sa.NVARCHAR(length=100),
               existing_nullable=True)
        batch_op.alter_column('tag_color',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=10),
               type_=sa.NVARCHAR(length=10),
               existing_nullable=True)
        batch_op.alter_column('author_id',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               type_=sa.NVARCHAR(length=40),
               existing_nullable=False)
        batch_op.alter_column('group_id',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               type_=sa.NVARCHAR(length=40),
               existing_nullable=False)
        batch_op.alter_column('team_id',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               type_=sa.NVARCHAR(length=40),
               existing_nullable=False)

    with op.batch_alter_table('teamtasks', schema=None) as batch_op:
        batch_op.add_column(sa.Column('completed_user', sa.NVARCHAR(length=40), nullable=True))
        batch_op.alter_column('task_id',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               type_=sa.NVARCHAR(length=40),
               existing_nullable=False)
        batch_op.alter_column('task_title',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=100),
               type_=sa.NVARCHAR(length=100),
               existing_nullable=True)
        batch_op.alter_column('task_description',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=500),
               type_=sa.NVARCHAR(length=500),
               existing_nullable=True)
        batch_op.alter_column('tag_id',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               type_=sa.NVARCHAR(length=40),
               existing_nullable=False)
        batch_op.alter_column('author_id',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               type_=sa.NVARCHAR(length=40),
               existing_nullable=False)
        batch_op.alter_column('team_id',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               type_=sa.NVARCHAR(length=40),
               existing_nullable=False)
        batch_op.create_foreign_key(None, 'users', ['completed_user'], ['user_id'])

    with op.batch_alter_table('user_team', schema=None) as batch_op:
        batch_op.alter_column('user_id',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               type_=sa.NVARCHAR(length=40),
               existing_nullable=False)
        batch_op.alter_column('team_id',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               type_=sa.NVARCHAR(length=40),
               existing_nullable=False)

    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.add_column(sa.Column('points', sa.Integer(), nullable=True))
        batch_op.alter_column('user_id',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               type_=sa.NVARCHAR(length=40),
               existing_nullable=False)
        batch_op.alter_column('email',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=100),
               type_=sa.NVARCHAR(length=100),
               existing_nullable=True)
        batch_op.alter_column('password',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=100),
               type_=sa.NVARCHAR(length=100),
               existing_nullable=True)
        batch_op.alter_column('name',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=256),
               type_=sa.NVARCHAR(length=256),
               existing_nullable=True)
        batch_op.alter_column('bio',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=2000),
               type_=sa.NVARCHAR(length=2000),
               existing_nullable=True)
        batch_op.alter_column('country',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=200),
               type_=sa.NVARCHAR(length=200),
               existing_nullable=True)
        batch_op.alter_column('image',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=200),
               type_=sa.NVARCHAR(length=200),
               existing_nullable=True)
        batch_op.alter_column('type_account',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=10),
               type_=sa.NVARCHAR(length=10),
               existing_nullable=True)
        batch_op.alter_column('external_id',
               existing_type=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               type_=sa.NVARCHAR(length=40),
               existing_nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.alter_column('external_id',
               existing_type=sa.NVARCHAR(length=40),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               existing_nullable=True)
        batch_op.alter_column('type_account',
               existing_type=sa.NVARCHAR(length=10),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=10),
               existing_nullable=True)
        batch_op.alter_column('image',
               existing_type=sa.NVARCHAR(length=200),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=200),
               existing_nullable=True)
        batch_op.alter_column('country',
               existing_type=sa.NVARCHAR(length=200),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=200),
               existing_nullable=True)
        batch_op.alter_column('bio',
               existing_type=sa.NVARCHAR(length=2000),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=2000),
               existing_nullable=True)
        batch_op.alter_column('name',
               existing_type=sa.NVARCHAR(length=256),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=256),
               existing_nullable=True)
        batch_op.alter_column('password',
               existing_type=sa.NVARCHAR(length=100),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=100),
               existing_nullable=True)
        batch_op.alter_column('email',
               existing_type=sa.NVARCHAR(length=100),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=100),
               existing_nullable=True)
        batch_op.alter_column('user_id',
               existing_type=sa.NVARCHAR(length=40),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               existing_nullable=False)
        batch_op.drop_column('points')

    with op.batch_alter_table('user_team', schema=None) as batch_op:
        batch_op.alter_column('team_id',
               existing_type=sa.NVARCHAR(length=40),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               existing_nullable=False)
        batch_op.alter_column('user_id',
               existing_type=sa.NVARCHAR(length=40),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               existing_nullable=False)

    with op.batch_alter_table('teamtasks', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.alter_column('team_id',
               existing_type=sa.NVARCHAR(length=40),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               existing_nullable=False)
        batch_op.alter_column('author_id',
               existing_type=sa.NVARCHAR(length=40),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               existing_nullable=False)
        batch_op.alter_column('tag_id',
               existing_type=sa.NVARCHAR(length=40),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               existing_nullable=False)
        batch_op.alter_column('task_description',
               existing_type=sa.NVARCHAR(length=500),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=500),
               existing_nullable=True)
        batch_op.alter_column('task_title',
               existing_type=sa.NVARCHAR(length=100),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=100),
               existing_nullable=True)
        batch_op.alter_column('task_id',
               existing_type=sa.NVARCHAR(length=40),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               existing_nullable=False)
        batch_op.drop_column('completed_user')

    with op.batch_alter_table('teamtags', schema=None) as batch_op:
        batch_op.alter_column('team_id',
               existing_type=sa.NVARCHAR(length=40),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               existing_nullable=False)
        batch_op.alter_column('group_id',
               existing_type=sa.NVARCHAR(length=40),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               existing_nullable=False)
        batch_op.alter_column('author_id',
               existing_type=sa.NVARCHAR(length=40),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               existing_nullable=False)
        batch_op.alter_column('tag_color',
               existing_type=sa.NVARCHAR(length=10),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=10),
               existing_nullable=True)
        batch_op.alter_column('tag_title',
               existing_type=sa.NVARCHAR(length=100),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=100),
               existing_nullable=True)
        batch_op.alter_column('tag_id',
               existing_type=sa.NVARCHAR(length=40),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               existing_nullable=False)

    with op.batch_alter_table('teams', schema=None) as batch_op:
        batch_op.add_column(sa.Column('team_password', mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=100), nullable=True))
        batch_op.alter_column('admin_id',
               existing_type=sa.NVARCHAR(length=40),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               existing_nullable=False)
        batch_op.alter_column('team_description',
               existing_type=sa.NVARCHAR(length=500),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=500),
               existing_nullable=True)
        batch_op.alter_column('team_name',
               existing_type=sa.NVARCHAR(length=100),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=100),
               existing_nullable=True)
        batch_op.alter_column('team_id',
               existing_type=sa.NVARCHAR(length=40),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               existing_nullable=False)
        batch_op.drop_column('team_code')

    with op.batch_alter_table('teamgroupss', schema=None) as batch_op:
        batch_op.alter_column('team_id',
               existing_type=sa.NVARCHAR(length=40),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               existing_nullable=False)
        batch_op.alter_column('def_tag',
               existing_type=sa.NVARCHAR(length=40),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               existing_nullable=True)
        batch_op.alter_column('color',
               existing_type=sa.NVARCHAR(length=10),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=10),
               existing_nullable=True)
        batch_op.alter_column('author_id',
               existing_type=sa.NVARCHAR(length=40),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               existing_nullable=False)
        batch_op.alter_column('group_title',
               existing_type=sa.NVARCHAR(length=100),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=100),
               existing_nullable=True)
        batch_op.alter_column('group_id',
               existing_type=sa.NVARCHAR(length=40),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               existing_nullable=False)

    with op.batch_alter_table('tasks', schema=None) as batch_op:
        batch_op.alter_column('user_id',
               existing_type=sa.NVARCHAR(length=40),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               existing_nullable=False)
        batch_op.alter_column('tag_id',
               existing_type=sa.NVARCHAR(length=40),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               existing_nullable=False)
        batch_op.alter_column('task_description',
               existing_type=sa.NVARCHAR(length=500),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=500),
               existing_nullable=True)
        batch_op.alter_column('task_title',
               existing_type=sa.NVARCHAR(length=100),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=100),
               existing_nullable=True)
        batch_op.alter_column('task_id',
               existing_type=sa.NVARCHAR(length=40),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               existing_nullable=False)

    with op.batch_alter_table('tags', schema=None) as batch_op:
        batch_op.alter_column('group_id',
               existing_type=sa.NVARCHAR(length=40),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               existing_nullable=False)
        batch_op.alter_column('user_id',
               existing_type=sa.NVARCHAR(length=40),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               existing_nullable=False)
        batch_op.alter_column('tag_color',
               existing_type=sa.NVARCHAR(length=10),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=10),
               existing_nullable=True)
        batch_op.alter_column('tag_title',
               existing_type=sa.NVARCHAR(length=100),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=100),
               existing_nullable=True)
        batch_op.alter_column('tag_id',
               existing_type=sa.NVARCHAR(length=40),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               existing_nullable=False)

    with op.batch_alter_table('groupss', schema=None) as batch_op:
        batch_op.alter_column('def_tag',
               existing_type=sa.NVARCHAR(length=40),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               existing_nullable=True)
        batch_op.alter_column('color',
               existing_type=sa.NVARCHAR(length=10),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=10),
               existing_nullable=True)
        batch_op.alter_column('user_id',
               existing_type=sa.NVARCHAR(length=40),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               existing_nullable=False)
        batch_op.alter_column('group_title',
               existing_type=sa.NVARCHAR(length=100),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=100),
               existing_nullable=True)
        batch_op.alter_column('group_id',
               existing_type=sa.NVARCHAR(length=40),
               type_=mysql.VARCHAR(charset='utf8mb3', collation='utf8mb3_general_ci', length=40),
               existing_nullable=False)

    op.drop_table('trees')
    # ### end Alembic commands ###
