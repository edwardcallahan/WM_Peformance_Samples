
package com.sakiladb;

import java.util.List;
import com.sakiladb.data.output.FilmInventoryRtnType;
import com.sakiladb.data.output.FilmsActorsRtnType;
import com.wavemaker.json.type.TypeDefinition;
import com.wavemaker.runtime.data.DataServiceManager;
import com.wavemaker.runtime.data.DataServiceManagerAccess;
import com.wavemaker.runtime.data.TaskManager;
import com.wavemaker.runtime.service.LiveDataService;
import com.wavemaker.runtime.service.PagingOptions;
import com.wavemaker.runtime.service.PropertyOptions;
import com.wavemaker.runtime.service.TypedServiceReturn;


/**
 *  Operations for service "sakilaDB"
 *  01/23/2012 22:07:31
 * 
 */
@SuppressWarnings("unchecked")
public class SakilaDB
    implements DataServiceManagerAccess, LiveDataService
{

    private DataServiceManager dsMgr;
    private TaskManager taskMgr;

    public List<FilmsActorsRtnType> filmsActors(Short fID) {
        return ((List<FilmsActorsRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (SakilaDBConstants.FilmsActorsQueryName), fID));
    }

    public com.sakiladb.data.Country getCountryById(Short id, PagingOptions pagingOptions) {
        List<com.sakiladb.data.Country> rtn = ((List<com.sakiladb.data.Country> ) dsMgr.invoke(taskMgr.getQueryTask(), (SakilaDBConstants.getCountryByIdQueryName), id, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<FilmInventoryRtnType> filmInventory(Short fId) {
        return ((List<FilmInventoryRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (SakilaDBConstants.FilmInventoryQueryName), fId));
    }

    public Object insert(Object o) {
        return dsMgr.invoke(taskMgr.getInsertTask(), o);
    }

    public TypedServiceReturn read(TypeDefinition rootType, Object o, PropertyOptions propertyOptions, PagingOptions pagingOptions) {
        return ((TypedServiceReturn) dsMgr.invoke(taskMgr.getReadTask(), rootType, o, propertyOptions, pagingOptions));
    }

    public Object update(Object o) {
        return dsMgr.invoke(taskMgr.getUpdateTask(), o);
    }

    public void delete(Object o) {
        dsMgr.invoke(taskMgr.getDeleteTask(), o);
    }

    public void begin() {
        dsMgr.begin();
    }

    public void commit() {
        dsMgr.commit();
    }

    public void rollback() {
        dsMgr.rollback();
    }

    public DataServiceManager getDataServiceManager() {
        return dsMgr;
    }

    public void setDataServiceManager(DataServiceManager dsMgr) {
        this.dsMgr = dsMgr;
    }

    public TaskManager getTaskManager() {
        return taskMgr;
    }

    public void setTaskManager(TaskManager taskMgr) {
        this.taskMgr = taskMgr;
    }

}
