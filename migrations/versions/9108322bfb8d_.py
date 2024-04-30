"""empty message

Revision ID: 9108322bfb8d
Revises: 
Create Date: 2024-04-28 08:35:47.603323

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9108322bfb8d'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('user_id', sa.NVARCHAR(length=40), nullable=False),
    sa.Column('email', sa.NVARCHAR(length=100), nullable=True),
    sa.Column('password', sa.NVARCHAR(length=100), nullable=True),
    sa.Column('name', sa.NVARCHAR(length=256), nullable=True),
    sa.Column('bio', sa.NVARCHAR(length=2000), nullable=True),
    sa.Column('location', sa.NVARCHAR(length=200), nullable=True),
    sa.Column('image', sa.NVARCHAR(length=200), nullable=True),
    sa.Column('type_account', sa.NVARCHAR(length=10), nullable=True),
    sa.Column('external_id', sa.NVARCHAR(length=40), nullable=True),
    sa.Column('isFillForm', sa.BOOLEAN(), nullable=True),
    sa.PrimaryKeyConstraint('user_id')
    )
    op.create_table('groupss',
    sa.Column('group_id', sa.NVARCHAR(length=40), nullable=False),
    sa.Column('group_title', sa.NVARCHAR(length=100), nullable=True),
    sa.Column('user_id', sa.NVARCHAR(length=40), nullable=False),
    sa.Column('color', sa.NVARCHAR(length=10), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.user_id'], ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('group_id', 'user_id')
    )
    op.create_table('tags',
    sa.Column('tag_id', sa.NVARCHAR(length=40), nullable=False),
    sa.Column('tag_title', sa.NVARCHAR(length=100), nullable=True),
    sa.Column('tag_color', sa.NVARCHAR(length=10), nullable=True),
    sa.Column('user_id', sa.NVARCHAR(length=40), nullable=False),
    sa.Column('group_id', sa.NVARCHAR(length=40), nullable=False),
    sa.ForeignKeyConstraint(['group_id'], ['groupss.group_id'], ondelete='CASCADE'),
    sa.ForeignKeyConstraint(['user_id'], ['users.user_id'], ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('tag_id', 'user_id', 'group_id')
    )
    op.create_table('tasks',
    sa.Column('task_id', sa.NVARCHAR(length=40), nullable=False),
    sa.Column('task_title', sa.NVARCHAR(length=100), nullable=True),
    sa.Column('task_description', sa.NVARCHAR(length=500), nullable=True),
    sa.Column('tag_id', sa.NVARCHAR(length=40), nullable=False),
    sa.Column('user_id', sa.NVARCHAR(length=40), nullable=False),
    sa.Column('deadline', sa.DateTime(), nullable=True),
    sa.Column('points', sa.Integer(), nullable=True),
    sa.Column('isCompleted', sa.BOOLEAN(), nullable=True),
    sa.ForeignKeyConstraint(['tag_id'], ['tags.tag_id'], ondelete='CASCADE'),
    sa.ForeignKeyConstraint(['user_id'], ['users.user_id'], ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('task_id', 'tag_id', 'user_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('tasks')
    op.drop_table('tags')
    op.drop_table('groupss')
    op.drop_table('users')
    # ### end Alembic commands ###
