from datetime import datetime
from typing import List

from sqlalchemy import Column, String, DateTime, Integer, Text, func
from sqlalchemy.orm import declarative_base

from pilot.configs.config import Config
from pilot.connections.rdbms.base_dao import BaseDao

CFG = Config()

Base = declarative_base()


class DocumentChunkEntity(Base):
    __tablename__ = "document_chunk"
    id = Column(Integer, primary_key=True)
    document_id = Column(Integer)
    doc_name = Column(String(100))
    doc_type = Column(String(100))
    content = Column(Text)
    meta_info = Column(String(500))
    gmt_created = Column(DateTime)
    gmt_modified = Column(DateTime)

    def __repr__(self):
        return f"DocumentChunkEntity(id={self.id}, doc_name='{self.doc_name}', doc_type='{self.doc_type}', document_id='{self.document_id}', content='{self.content}', meta_info='{self.meta_info}', gmt_created='{self.gmt_created}', gmt_modified='{self.gmt_modified}')"


class DocumentChunkDao(BaseDao):
    def __init__(self):
        super().__init__(
            database="knowledge_management", orm_base=Base, create_not_exist_table=True
        )

    def create_documents_chunks(self, documents: List):
        session = self.Session()
        docs = [
            DocumentChunkEntity(
                doc_name=document.doc_name,
                doc_type=document.doc_type,
                document_id=document.document_id,
                content=document.content or "",
                meta_info=document.meta_info or "",
                gmt_created=datetime.now(),
                gmt_modified=datetime.now(),
            )
            for document in documents
        ]
        session.add_all(docs)
        session.commit()
        session.close()

    def get_document_chunks(self, query: DocumentChunkEntity, page=1, page_size=20):
        session = self.Session()
        document_chunks = session.query(DocumentChunkEntity)
        if query.id is not None:
            document_chunks = document_chunks.filter(DocumentChunkEntity.id == query.id)
        if query.document_id is not None:
            document_chunks = document_chunks.filter(
                DocumentChunkEntity.document_id == query.document_id
            )
        if query.doc_type is not None:
            document_chunks = document_chunks.filter(
                DocumentChunkEntity.doc_type == query.doc_type
            )
        if query.doc_name is not None:
            document_chunks = document_chunks.filter(
                DocumentChunkEntity.doc_name == query.doc_name
            )
        if query.meta_info is not None:
            document_chunks = document_chunks.filter(
                DocumentChunkEntity.meta_info == query.meta_info
            )

        document_chunks = document_chunks.order_by(DocumentChunkEntity.id.desc())
        document_chunks = document_chunks.offset((page - 1) * page_size).limit(
            page_size
        )
        result = document_chunks.all()
        session.close()
        return result

    def get_document_chunks_count(self, query: DocumentChunkEntity):
        session = self.Session()
        document_chunks = session.query(func.count(DocumentChunkEntity.id))
        if query.id is not None:
            document_chunks = document_chunks.filter(DocumentChunkEntity.id == query.id)
        if query.document_id is not None:
            document_chunks = document_chunks.filter(
                DocumentChunkEntity.document_id == query.document_id
            )
        if query.doc_type is not None:
            document_chunks = document_chunks.filter(
                DocumentChunkEntity.doc_type == query.doc_type
            )
        if query.doc_name is not None:
            document_chunks = document_chunks.filter(
                DocumentChunkEntity.doc_name == query.doc_name
            )
        if query.meta_info is not None:
            document_chunks = document_chunks.filter(
                DocumentChunkEntity.meta_info == query.meta_info
            )
        count = document_chunks.scalar()
        session.close()
        return count

    # def update_knowledge_document(self, document:KnowledgeDocumentEntity):
    #     session = self.Session()
    #     updated_space = session.merge(document)
    #     session.commit()
    #     return updated_space.id

    def delete(self, document_id: int):
        session = self.Session()
        if document_id is None:
            raise Exception("document_id is None")
        query = DocumentChunkEntity(document_id=document_id)
        knowledge_documents = session.query(DocumentChunkEntity)
        if query.document_id is not None:
            chunks = knowledge_documents.filter(
                DocumentChunkEntity.document_id == query.document_id
            )
        chunks.delete()
        session.commit()
        session.close()
